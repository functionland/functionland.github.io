<script>
	import { innerWidth, innerHeight } from 'svelte-window-stores/viewport';
	import { assets } from '$app/paths';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let playInterval,
		outOfViewClass,
		showSlogan = false,
		frames = [],
		lastScroll = 0,
		currentFrame = 1,
		introPlaying = true,
		scrollY;

	let isMobile = $innerWidth < 960;
	let totalFrames = isMobile ? 66 : 59;
	let threshold = isMobile ? 36 : 37;
	$: ratio = (parseInt(totalFrames/12)) / 10;
	$: sloganHideFrame = threshold + 5;
	$: framesToAdd = totalFrames * (scrollY / $innerHeight);
	for (let i = 1; i < totalFrames + 1; i++) {
		frames.push(i);
	}
	const detectScroll = (event) => {
		if (scrollY < $innerHeight) {
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
				if (currentFrame >= threshold - 2 && currentFrame <= totalFrames - 1) {
					if (introPlaying == true) {
						if (event.cancelable == true) {
							event.preventDefault();
						}
						return;
					} else {
						currentFrame = parseInt((currentFrame + (framesToAdd * ratio + threshold)) / 2);
						if (currentFrame > sloganHideFrame) {
							showSlogan = false;
						} else {
							showSlogan = true;
						}
					}
				}
			} else {
				if (currentFrame >= threshold && currentFrame <= totalFrames + 30) {
					if (introPlaying == true) {
						if (event.cancelable == true) {
							event.preventDefault();
						}
						return;
					} else {
						currentFrame = parseInt((currentFrame + (framesToAdd * ratio + threshold)) / 2);
						if (currentFrame < sloganHideFrame) {
							showSlogan = true;
						} else {
							showSlogan = false;
						}
					}
				}
			}
		}
		if (scrollY < $innerHeight) {
			outOfViewClass = '';
		} else {
			outOfViewClass = 'out-of-view';
		}
		lastScroll = scrollY;
	};
	onMount(() => {
		const docReady = (callbackFunc) => {
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
				if (currentFrame <= threshold) {
					currentFrame = currentFrame + 1;
				} else {
					clearInterval(playInterval);
					introPlaying = false;
				}
			}, 1.4 * (1 / 42.4) * 1000);
		};
		docReady(play);
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

<svelte:window
	bind:scrollY
	on:mousewheel|nonpassive={preventWhilePlaying}
	on:scroll|nonpassive={detectScroll}
	on:touchmove|nonpassive={preventWhilePlaying}
/>
<section
	on:mousewheel|nonpassive={mouseWheelEvent}
	on:touchmove|nonpassive={mouseWheelEvent}
	class={outOfViewClass}
>
	<div class="parallax-bg">
		{#each frames as frame, index}
			{#if parseInt(currentFrame) == frame}
				<div class="frame active frame_{frame}">
					<picture>
						<source
							media="(min-width:960px)"
							srcset={assets + '/frames/intro/desktop/frame_' + frame + '.webp'}
							type="image/webp" width="1920" height="1080"
						/>
						<source
							media="(min-width:960px)"
							srcset={assets + '/frames/intro/desktop/frame_' + frame + '.jpeg'}
							type="image/jpeg" width="1920" height="1080"
						/>
						<source
							media="(max-width:959px)"
							srcset={assets + '/frames/intro/mobile/frame_' + frame + '.webp'}
							type="image/webp" width="720" height="1080"
						/>
						<source
							media="(max-width:959px)"
							srcset={assets + '/frames/intro/mobile/frame_' + frame + '.jpeg'}
							type="image/jpeg" width="720" height="1080"
						/>
						<img src={assets + '/frames/intro/desktop/frame_' + frame + '.jpeg'} alt="" />
					</picture>
				</div>
			{:else}
				<div class="frame frame_{frame}">
					<picture>
						<source
							media="(min-width:960px)"
							srcset={assets + '/frames/intro/desktop/frame_' + frame + '.webp'}
							type="image/webp" width="1920" height="1080"
						/>
						<source
							media="(min-width:960px)"
							srcset={assets + '/frames/intro/desktop/frame_' + frame + '.jpeg'}
							type="image/jpeg" width="1920" height="1080"
						/>
						<source
							media="(max-width:959px)"
							srcset={assets + '/frames/intro/mobile/frame_' + frame + '.webp'}
							type="image/webp" width="720" height="1080"
						/>
						<source
							media="(max-width:959px)"
							srcset={assets + '/frames/intro/mobile/frame_' + frame + '.jpeg'}
							type="image/jpeg" width="720" height="1080"
						/>
						<img src={assets + '/frames/intro/desktop/frame_' + frame + '.jpeg'} alt="" />
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
	section {
		background-color: var(--bkg);
		padding: 0;
		height: var(--intro-height);
		overflow: hidden;
	}
	.parallax-bg {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		height: 100%;
		align-items: end;
		align-content: end;
		justify-content: center;
	}
	.parallax-bg:after {
		content: "";
		position: absolute;
		background-color: var(--b-o-4);
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 2;
    	mix-blend-mode: overlay;
	}
	.frame {
		width: 100%;
		grid-column: 1/-1;
		grid-row: 1/-1;
		height: max-content;
		visibility: hidden;
		display: none;
		height: 100%;
		align-items: end;
		align-content: end;
		justify-content: center;
	}
	.frame.active {
		visibility: visible;
		display: grid;
		z-index: 1;
	}
	.frame picture {
		display: grid;
		align-content: end;
		justify-content: center;
	}
	.frame img {
		width: 100%;
		height: auto;
		object-fit: contain;
		width: unset;
		height: unset;
		max-width: unset;
		object-position: bottom;	
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
	p {
		color: #00D0D0;
		pointer-events: none;
		font-family: var(--roboto);
		font-size: var(--slogan-font-size);
		font-weight: var(--slogan-font-weight);
		line-height: var(--slogan-line-height);
		letter-spacing: var(--slogan-letter-spacing);
		/* background: var(--slogan-gradient-webkit); */
		text-align: center;
		/* background-size: var(--slogan-background-size); */
		/* background-position: var(--slogan-background-position); */
		/* background-clip: text; */
		/* -webkit-background-clip: text; */
		/* -webkit-text-fill-color: transparent; */
		max-width: var(--slogan-max-width);
		margin: 0 auto;
		word-break: break-word;
		position: relative;
		z-index: 4;
	}
	@media (max-width: 959px) {
		picture {
			display: grid;
			align-items: end;
			justify-content: center;
			overflow: hidden;
			overflow: clip;
			justify-content: center;
			max-width: 100vw;
			overflow-y: scroll;
		}
		.frame img {
			/* width: unset;
			max-width: unset;
			height: 100vh;     */
			aspect-ratio: 1080/720 auto;
			height: unset;
			width: unset;
			min-height: unset;
			max-height: unset;
			max-width: unset;
			min-width: unset;
			/* min-height: 100vh; */
			display: block;
			/* width: calc( (1080/720) * 100vw); */
			min-height: calc((1080 / 720) * 100vw);
			/* height: var(--intro-height); */
			max-width: calc((1080 / 720) * 100vw);
		}
	}
	@media (min-width: 960px) {
		p {
			word-break: unset;
		}
	}
	@media (prefers-color-scheme: dark) {
		/* .frame {
    		background: var(--bkg);
		} */
	}
</style>
