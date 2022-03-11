<script>
	import { scrollY, innerHeight, innerWidth } from 'svelte-window-stores/viewport';
	import { scrollPosition, scrolling } from 'svelte-scrolling';
	import { assets } from '$app/paths';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let introHeight, introSection, videoRef;
	let src = assets + `videos/intro.webm`;
	let fps = 30;
	let mstopTarget = 1.333333333333333333333333333;
	let dstopTarget = 1.44444444444444444444444444;
	$: stopTarget = $innerWidth < 960 ? mstopTarget : dstopTarget;
	$: stopFrame = parseInt(stopTarget * fps);
	$: currentFrame = parseInt(fps * time);
	let mthreshold = 2.232709;
	let dthreshold = 3.3333333333333333;
	$: threshold = $innerWidth < 960 ? mthreshold : dthreshold;
	$: thresholdFrame = parseInt(threshold * fps);
	let initialPlayBackDone = false;
	let noInterruptPlay = false;
	let noInteruptInPlay = false;
	const pauseNearTarget = (event) => {
		if (noInterruptPlay == true) {
			if (currentFrame >= thresholdFrame + stopFrame) {
				time = thresholdFrame + stopFrame / fps;
				if (videoRef != undefined && videoRef.paused != true) {
					videoRef.pause();
					return;
				} else {
					event.target.pause();
					return;
				}
			}
		} else {
			if (currentFrame > thresholdFrame / 2 + stopFrame / 3) {
				showSlogan = false;
			} else {
				showSlogan = true;
			}
			if (initialPlayBackDone != true) {
				if (currentFrame >= stopFrame) {
					initialPlayBackDone = true;
					// time = stopFrame/fps;
					if (videoRef != undefined && videoRef.paused != true) {
						videoRef.pause();
					} else {
						event.target.pause();
					}
				}
			} else {
				if (currentFrame >= thresholdFrame) {
					time = thresholdFrame / fps;
					if (videoRef != undefined && videoRef.paused != true) {
						videoRef.pause();
						return;
					} else {
						event.target.pause();
						return;
					}
				}
			}
		}
	};
	const mouseWheelEvent = (event) => {
		if (initialPlayBackDone != true) {
			event.preventDefault();
			return;
		} else {
			if (event.deltaY > 40) {
				scrollPosition($innerHeight, { duration: 3000, easing: 'easeInOutQuad' });
				// if (noInterruptPlay != true) {
				// 	event.target.play();
				// 	noInterruptPlay	= true;
				// } else {
				// 	event.target.currentTime = threshold;
				// }
			} else {
			}
		}
	};
	const ontouchmoveEvent = (event) => {
		if (initialPlayBackDone != true) {
			event.preventDefault();
			return;
		}
	};
	$: remainingDuration = (thresholdFrame - stopFrame) / fps;
	$: onMount(() => {
		const passiveSupported = () => {
			let supported = false;
			try {
				let options = Object.defineProperty({}, 'passive', {
					get: () => {
						supported = true;
					}
				});
				window.addEventListener('test', null, options);
			} catch (err) {
				supported = false;
			}
			return supported;
		};
		window.addEventListener(
			'touchmove',
			(event) => {
				ontouchmoveEvent(event);
			},
			passiveSupported ? { passive: false } : false
		);
	});
	let showSlogan = false;

	let goToNextSection = (event) => {
		if ($scrollY > introHeight) {
			introSection.style.opacity = 0;
		} else {
			introSection.style.opacity = 1;
		}
	};
	$: calculated_time = (remainingDuration * ($scrollY / $innerHeight)) / 1.3 + stopFrame / fps;
	$: time = calculated_time <= threshold ? calculated_time : threshold;
</script>

<b>scrolling {scrolling}</b>
<svelte:window on:scroll={goToNextSection} />
<section
	on:mousewheel={mouseWheelEvent}
	on:touchmove={ontouchmoveEvent}
	bind:clientHeight={introHeight}
	bind:this={introSection}
>
	<!-- svelte-ignore a11y-media-has-caption -->

	<video
		bind:this={videoRef}
		bind:currentTime={time}
		on:timeupdate={pauseNearTarget}
		id="intro"
		autoplay
		muted
		playsinline
		width="100%"
		{src}
	/>
	<div>
		{#if showSlogan}
			<p in:fly={{ delay: 100, y: 200, duration: 800 }} class="slogan">
				A Piece of Blockchain on Your Desk
			</p>
		{/if}
	</div>
</section>

<style>
	p {
		font-family: var(--roboto);
		font-size: var(--slogan-font-size);
		font-weight: var(--slogan-font-weight);
		line-height: var(--slogan-line-height);
		letter-spacing: var(--slogan-letter-spacing);
		background: var(--slogan-gradient-webkit);
		text-align: center;
		background-size: var(--slogan-background-size);
		background-position: var(--slogan-background-position);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	section {
		height: var(--intro-height);
		position: fixed;
		z-index: 0;
		top: var(--header-height);
		left: 0;
		right: 0;
		bottom: 0;
		transition: opacity 0.3s;
	}
	div {
		position: absolute;
		width: fit-content;
		height: fit-content;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		pointer-events: none;
	}
	video {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 0;
		width: auto;
		height: var(--intro-height);
		z-index: 0;
	}
	p {
		max-width: var(--slogan-max-width);
		margin: 0 auto;
		word-break: break-word;
		position: relative;
		z-index: 2;
	}
	@media (min-width: 960px) {
		video {
			width: 100%;
			height: auto;
		}
		p {
			word-break: unset;
		}
	}
</style>
