<script>
	import { base, assets } from '$app/paths';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let playInterval, heightSetInterval, outOfViewClass, scrollSpeed = 0, innerWidth, innerHeight, showSlogan = false, frames = [], lastScroll = 0, currentFrame = 1, introPlaying = true, scrollY, ready = false, introWrapper;
	$: mobile = innerWidth < 960
	let totalFrames = (mobile == true) ? 59 : 61;
	$: threshold = (mobile == true) ? 36 : 35;
	$: ratio = (mobile == true) ? 0.67 : 0.3;
	

	for (let i = 1; i < totalFrames+1; i++) {
		frames.push(i);
	}
	$: framesToAdd = totalFrames * (scrollY / innerHeight)
	const detectScroll = (event) => {
		// if (currentFrame > 40 && currentFrame < 46) {
		// 	introWrapper.style.paddingBottom = `${scrollY * ratio}px`;
		// } else {
		// 	introWrapper.style.height = 'var(--intro-height)';
		// }
		if (scrollY < innerHeight) {
			if (currentFrame < 46) {
				event.preventDefault();
			}
			if (introPlaying == true) {
				if (event.cancelable == true) {
					event.preventDefault();
				}
				return;
			}
			if (scrollY > lastScroll) {
				if (currentFrame >= (threshold - 2) && currentFrame <= totalFrames) {
					if (introPlaying == true) {
						if (event.cancelable == true) {
							event.preventDefault();
						}
						return;
					} else {
						currentFrame = ( framesToAdd * ratio) + threshold;
						if (currentFrame > 60) {
							showSlogan = false;
						}
					}
				}
			} else {
				if (currentFrame >= threshold && currentFrame <= (totalFrames + 30)) {
					if (introPlaying == true) {
						if (event.cancelable == true) {
							event.preventDefault();
						}
						return;
					} else {
						currentFrame = ( framesToAdd * ratio) + threshold;
						if (currentFrame < 80) {
							showSlogan = true;
						}
					}
				}
			}
		}
		if (scrollY < innerHeight) {
			outOfViewClass = '';
		} else {
			outOfViewClass = 'out-of-view';
		}
		lastScroll = scrollY;
	};
	const play = () => {
		introPlaying = true;
		playInterval = setInterval(() => {
			if (currentFrame <= threshold) {
				currentFrame = currentFrame + 1;
			} else {
				clearInterval(playInterval);
				introPlaying = false;
			}
		}, 1.4 * (1 / 42.4) * 1000);
	};
	
	onMount(() => {
		play()
		showSlogan = true;
	});
	const preventWhilePlaying = (event) => {
		if (introPlaying == true) {
			// if (event.cancelable == true) {
			// 	event.preventDefault();
			// }
			return;
		}
	};
	const mouseWheelEvent = (event) => {
		if (introPlaying == true) {
			// if (event.cancelable == true) {
			// 	event.preventDefault();
			// }
			return;
		}
	};
</script>

<svelte:head>
	{#each frames as frame, index}
		<link
			rel="preload"
			as="image"
			href={base + assets + '/frames/intro/desktop/desktop_frame_' + frame + '.jpg'}
			media="(min-width:960px)"
		/>
		<link
			rel="preload"
			as="image"
			href={base + assets + '/frames/intro/mobile/mobile_frame_' + frame + '.jpg'}
			media="(max-width:959px)"
		/>
	{/each}
</svelte:head>
<svelte:window
	bind:innerHeight={innerHeight}
	bind:innerWidth={innerWidth}
	bind:scrollY={scrollY}
	on:mousewheel|nonpassive={preventWhilePlaying}
	on:scroll|nonpassive={detectScroll}
	on:touchmove|nonpassive={preventWhilePlaying}
/>
<b>currentFrame {currentFrame} <hr/> "totalFrames" {totalFrames} <hr/> threshold {threshold} <hr />ratio {ratio}</b>
<section on:mousewheel|nonpassive={mouseWheelEvent} on:touchmove|nonpassive={mouseWheelEvent} class={outOfViewClass} bind:this={introWrapper}>
	<div class="parallax-bg">
		{#each frames as frame, index}
			{#if parseInt(currentFrame) == frame || (currentFrame >= frame && currentFrame <= frame + 1) || (currentFrame <= frame && currentFrame >= frame - 1)}
				<div class="frame active">
					<picture>
						<source
							media="(min-width:960px)"
							srcset={base + assets + '/frames/intro/desktop/desktop_frame_' + frame + '.jpg'}>
						<img src={base + assets + '/frames/intro/mobile/mobile_frame_' + frame + '.jpg'} alt="">
					</picture>
				</div>
			{:else}
				<div class="frame">
					<picture>
						<source
							media="(min-width:960px)"
							srcset={base + assets + '/frames/intro/desktop/desktop_frame_' + frame + '.jpg'}>
						<img src={base + assets + '/frames/intro/mobile/mobile_frame_' + frame + '.jpg'} alt="">
					</picture>
				</div>
			{/if}
		{/each}
		<div class="slogan">
			{#if showSlogan}
				<p
					in:fly={{ delay: 100, y: 200, duration: 1699 }}
					out:fade={{ delay: 0, duration: 300 }}
					class="slogan"
				>
					A Piece of Blockchain on Your Desk
				</p>
			{/if}
		</div>
	</div>
</section>

<style>
	b {
		position: fixed;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		background: var(--b-o-8);
		color: white;
		z-index: 30;
		padding: 1rem 2rem;
	}
	section {
		height: var(--intro-height);
		background-color: transparent;
		position: relative;
		z-index: 0;
		padding: 0;
		transition: 0.6s height 0.3s ease-in-out;
	}
	.parallax-bg {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	.out-of-view {
		opacity: 0;
	}

	.slogan {
		pointer-events: none;
		position: absolute;
		width: fit-content;
		height: fit-content;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		z-index: 12;
		width: 100%;
		height: 100%;
		display: grid;
		align-items: center;
	}
	.frame {
		/* position: absolute;
		pointer-events: none;
		width: 100%;
		inset: 0;
		height: auto;
		bottom: 0;
		z-index: 0; */
		
		position: absolute;
		pointer-events: none;
		width: 100%;
		inset: 0;
		height: 100%;
		z-index: 0;
		/* display: none; */
		/* visibility: hidden !important; */
		background-position: bottom center;
		background-size: auto 100%;
		background-repeat: no-repeat;
		background-color: white;
	}
	.frame.active {
		z-index: 1;
		/* display: block;
		visibility: visible !important; */
	}
	.frame img {
		position: absolute;
		bottom: 0;
		height: 100%;
		width: auto;
		max-width: unset;
		/* height: 100%; */
		left: 50%;
		transform: translateX(-50%);
		object-fit: contain;
	}
	p {
		pointer-events: none;
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
		max-width: var(--slogan-max-width);
		margin: 0 auto;
		word-break: break-word;
		position: relative;
		z-index: 4;
	}
	@media (min-width: 960px) {
		section {
			aspect-ratio: 16/9;
			overflow: hidden;
			width: 100%;
		}
		.parallax-bg {
			height: var(--intro-height);
			top: 60px;
		}
		picture {
			aspect-ratio: 16/9;
			height: 100%;
			width: unset;
		}
		img {
			width: 100%;
			height: unset;
			aspect-ratio: 16/9;
			bottom: 0;
		}
		p {
			word-break: unset;
		}
		.frame img {
			height: auto;
			width: 100%;
			max-width: 100%;
		}
	}
</style>
