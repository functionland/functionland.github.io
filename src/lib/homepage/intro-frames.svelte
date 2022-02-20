<script>
	import { base, assets } from '$app/paths';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let playInterval, outOfViewClass, scrollSpeed = 0, innerHeight, showSlogan = false, frames = [], lastScroll = 0, currentFrame = 1, introPlaying = true, scrollY, ready = false;
	onMount(() => {
		const docReady = callbackFunc => {
			if (document.readyState !== 'loading') {
			callbackFunc();
			} else if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', callbackFunc);
			} else {
			document.attachEvent('onreadystatechange', function () {
				if (document.readyState === 'complete') {
				callbackFunc();
				}
			});
			}
		};
		const play = () => {
			introPlaying = true;
			playInterval = setInterval(() => {
				if (currentFrame <= 42) {
					currentFrame = currentFrame + 1;
				} else {
					clearInterval(playInterval);
					introPlaying = false;
				}
			}, 1.4 * (1 / 42.4) * 1000);
		};
		docReady(play);
		showSlogan = true;
		const getScrollSpeed = (settings) => {
			var lastPos,
				newPos,
				timer,
				delta,
				delay = 50;

			function clear() {
				lastPos = null;
				delta = 0;
			}

			clear();
			return function () {
				newPos = scrollY;
				if (lastPos != null) {
					delta = newPos - lastPos;
				}
				lastPos = newPos;
				clearTimeout(timer);
				timer = setTimeout(clear, delay);
				scrollSpeed = delta;
			};
		};
		window.addEventListener('scroll', getScrollSpeed());
	});
	const preventWhilePlaying = (event) => {
		if (introPlaying == true) {
			if (event.cancelable == true) {
				event.preventDefault();
			}
			return;
		}
	};
	const mouseWheelEvent = (event) => {
		if (introPlaying == true) {
			if (event.cancelable == true) {
				event.preventDefault();
			}
			return;
		}
	};
	for (let i = 0; i < 100; i++) {
		frames.push(i + 1);
	}
	const detectScroll = (event) => {
		if (scrollY < innerHeight) {
			outOfViewClass = '';
			// document.querySelector('main').style.marginTop = `${innerHeight}px`;
			// document.querySelector('main').style.paddingTop = 0;
		} else {
			outOfViewClass = 'out-of-view';
			// document.querySelector('main').style.marginTop = 0;
			// document.querySelector('main').style.paddingTop = `${innerHeight}px`;
		}
		if (scrollY < innerHeight) {
			if (introPlaying == true) {
				if (event.cancelable == true) {
					event.preventDefault();
				}
				return;
			}
			if (scrollY > lastScroll) {
				if (currentFrame >= 2 && currentFrame <= 100) {
					if (introPlaying == true) {
						if (event.cancelable == true) {
							event.preventDefault();
						}
						return;
					} else {
						currentFrame += 
							// (0.25644438000000001 + (scrollSpeed / innerHeight) + (scrollSpeed / scrollY) * 5);
							0.86644438000000001 + scrollSpeed / innerHeight + scrollSpeed / scrollY;
						if (currentFrame > 60) {
							showSlogan = false;
						}
					}
				}
			} else {
				if (currentFrame >= 43 && currentFrame <= 102) {
					if (introPlaying == true) {
						if (event.cancelable == true) {
							event.preventDefault();
						}
						return;
					} else {
						currentFrame -= 0.6644438000000001 + scrollSpeed / innerHeight;
						if (scrollY < 300) {
							currentFrame -= 0.86644438000000001;
						}
						if (currentFrame < 80) {
							showSlogan = true;
						}
					}
				}
			}
		}
		lastScroll = scrollY;
	};
</script>

<svelte:head>
	{#each frames as frame, index}

		<link
			rel="preload"
			as="image"
			href={base + assets + '/frames/intro/medium/frame_' + frame + '_medium.jpg'}
			media="(min-width:960px)"
		/>
		<link
			rel="preload"
			as="image"
			href={base + assets + '/frames/intro/medium/frame_' + frame + '_small.jpg'}
			media="(max-width:959px)"
		/>
	{/each}
</svelte:head>
<svelte:window
	bind:innerHeight={innerHeight}
	bind:scrollY={scrollY}
	on:mousewheel|nonpassive={preventWhilePlaying}
	on:scroll|nonpassive={detectScroll}
	on:touchmove|nonpassive={preventWhilePlaying}
/>
<section on:mousewheel|nonpassive={mouseWheelEvent} on:touchmove|nonpassive={mouseWheelEvent} class={outOfViewClass}>
	<div class="parallax-bg">
		{#each frames as frame, index}
			{#if parseInt(currentFrame) == frame || (currentFrame >= frame && currentFrame <= frame + 1) || (currentFrame <= frame && currentFrame >= frame - 1)}
				<!-- <div
					class="frame active"
					style="background-image:url({base +
						assets +
						'/frames/intro/medium/frame_' +
						frame +
						'_medium.jpg'})"
				/> -->
				<div class="frame active">
					<picture>
						<source
							media="(min-width:960px)"
							srcset={base + assets + '/frames/intro/medium/frame_' + frame + '_medium.jpg'}>
						<img src={base + assets + '/frames/intro/small/frame_' + frame + '_small.jpg'} alt="">
					</picture>
				</div>
			{:else}
				<div class="frame">
					<picture>
						<source
							media="(min-width:960px)"
							srcset={base + assets + '/frames/intro/medium/frame_' + frame + '_medium.jpg'}>
						<img src={base + assets + '/frames/intro/small/frame_' + frame + '_small.jpg'} alt="">
					</picture>
				</div>
				<!-- <div
					class="frame"
					style="background-image:url({base +
						assets +
						'/frames/intro/medium/frame_' +
						frame +
						'_medium.jpg'})"
				/> -->
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
	section {
		height: var(--intro-height);
		background-color: transparent;
		position: relative;
		z-index: 0;
		padding: 0;
	}
	.parallax-bg {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #3A3941;
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
		background-color: #3A3941;
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
