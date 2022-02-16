<script context="module">
	export const prerender = true;
	export const intro = true;
</script>

<script>
	import { scrollY, innerHeight } from 'svelte-window-stores/viewport';
	import { scrollElement, scrollPosition } from 'svelte-scrolling';
	import { base, assets } from '$app/paths';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let playInterval;
	let introPlaying = true;
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
	

	let scrollSpeed = 0

	let mainElement 
	let mainElementStyle
	let mainElementMarginTop
	let windowHeight
	onMount(() => {
		play();
		showSlogan = true;
		const getScrollSpeed = (settings) => {
			var lastPos, newPos, timer, delta, 
			delay = 50; // in "ms" (higher means lower fidelity )

			function clear() {
				lastPos = null;
				delta = 0;
			}

			clear();

			return function(){
				newPos = $scrollY;
				if ( lastPos != null ){ // && newPos < maxScroll 
					delta = newPos -  lastPos;
				}
				lastPos = newPos;
				clearTimeout(timer);
				timer = setTimeout(clear, delay);
				console.log(delta)
				scrollSpeed = delta;
			};
		};
		
		window.addEventListener('scroll', getScrollSpeed());
	});
	const preventWhilePlaying = (event) => {
		if (introPlaying == true) {
			event.preventDefault();
			return;
		}
	};
	const mouseWheelEvent = (event) => {
		if (introPlaying == true) {
			event.preventDefault();
			return;
		} else {
			// if (event.deltaY > 0) {
			// 	if (currentFrame > 60) {
			// 		event.preventDefault();
			// 		scrollPosition($innerHeight, {duration: 300});
			// 	}
			// } else {
			// }
		}
		
	};
	let showSlogan = false;
	let frames = [];
	let framesImages = [];
	for (let i = 1; i < 101; i++) {
		frames.push(i + 1);
	}
	let currentFrame = 1;
	let lastScroll = 0;
	// $:frameStep = ;
	const trickScrollBar = (state) => {
		if($scrollY > $innerHeight) {
			document.querySelector('main').style.marginTop = "0";
			document.querySelector('main').style.paddingTop = "100vh";
		} else {
			document.querySelector('main').style.marginTop = "100vh"
			document.querySelector('main').style.paddingTop = "0"
		}
		requestAnimationFrame(trickScrollBar)
	}
	const detectScroll = (event) => {
		if ($scrollY < $innerHeight) {
			cancelAnimationFrame(trickScrollBar)
			if (introPlaying == true) {
				event.preventDefault();
				return;
			}
			if ($scrollY > lastScroll) {
				if (currentFrame >= 2 && currentFrame <= 100) {
					if (introPlaying == true) {
						event.preventDefault();
						return;
					} else {
						currentFrame +=  (0.25644438000000001 + (scrollSpeed / $innerHeight) + (scrollSpeed / $scrollY) );
						if (currentFrame > 60) {
							showSlogan = false;
						}
					}
				}
			} else {
				if (currentFrame >= 43 && currentFrame <= 102) {
					if (introPlaying == true) {
						event.preventDefault();
						return;
					} else {
						currentFrame -=  (0.6644438000000001 + (scrollSpeed / $innerHeight) );
						if ($scrollY < 300) {
							currentFrame -=  0.86644438000000001
						}
						if (currentFrame < 80) {
							showSlogan = true;
						}
					}
				}
			}
		}
		lastScroll = $scrollY;
	};
	let currentActive = 0;
</script>

<svelte:head>
	{#each frames as frame, index}
		<link rel="preload" as="image" href={base + assets + '/frames/intro/medium/frame_' + index + '_medium.jpg'} media="(min-width:960px)" />
	{/each}
</svelte:head>
<svelte:window
	bind:innerHeight={windowHeight}
	on:mousewheel|nonpassive={preventWhilePlaying}
	on:scroll|nonpassive={detectScroll}
	on:touchmove|nonpassive={preventWhilePlaying}
/>
<section on:mousewheel|nonpassive={mouseWheelEvent}
		 on:touchmove|nonpassive={mouseWheelEvent}>
	{#each frames as frame, index}
		{#if (
			parseInt(currentFrame) == frame || 
			(currentFrame >= frame && currentFrame <= (frame + 1)) ||
			(currentFrame <= frame && currentFrame >= (frame - 1))
			)}
			<div class="frame active" style="background-image:url({base + assets + '/frames/intro/medium/frame_' + (frame) + '_medium.jpg'})"></div>
		{:else}
			<div class="frame" style="background-image:url({base + assets + '/frames/intro/medium/frame_' + (frame) + '_medium.jpg'})"></div>
		{/if}
	{/each}
	<div class="slogan">
		{#if showSlogan}
			<p in:fly={{ delay: 100, y: 200, duration: 1699 }} out:fade={{ delay: 0, duration: 300 }} class="slogan">
				A Piece of Blockchain on Your Desk
			</p>
		{/if}
	</div>
</section>
<b>currentFrame {currentFrame} <hr> $scrollY { $scrollY}</b>

<!-- <b>FRAME: {currentFrame} <hr> scroll = {$scrollY} <hr> speed = {scrollSpeed} <hr> variatorFrame = {variatorFrame} <hr> </b> -->
<style>
	b {
		position: fixed;
		left: 50%;
		top: 0;
		transform: translateX(-50%);
		background: var(--b-o-9);
		color: white;
		font-weight: bold;
		padding: 1rem;
		width: fit-content;
		z-index: 33;
	}
	div.frame {
		position: absolute;
		pointer-events: none;
		width: 100%;
		inset: 0;
		height: 100%;
		z-index: 0;
		display: none;
		visibility: hidden !important;
		background-position: bottom center;
		background-size: auto 100%;
		background-repeat: no-repeat;
	}
	div.frame.active {
		display: block;
		visibility: visible !important;
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
	section {
		height: var(--intro-height);
		position: fixed;
		z-index: 0;
		top: 60px;
		left: 0;
		right: 0;
		bottom: 0;
		transition: opacity 0.3s;
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
	@media (min-width: 960px) {
		p {
			word-break: unset;
		}
		div.frame {
			max-width: unset;
			background-size: 100% auto;
		}
	}
</style>
