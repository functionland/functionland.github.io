<script>
	import { scrollY, innerHeight } from 'svelte-window-stores/viewport';
	import { scrollElement, scrollPosition } from 'svelte-scrolling';
	import { base, assets } from '$app/paths';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let introPlaying = true;
	let forwardPalying = false;
	let backwardPalying = false;
	let playInterval;
	let playForwardInterval;
	let playBackwardInterval;
	const play = (type) => {
		if (type == 'init') {
			if (currentFrame <= 42) {
				currentFrame = currentFrame + 1;
			} else {
				clearInterval(playInterval);
				introPlaying = false;
			}
		} else if (type == 'forward') {
			if (introPlaying == true || backwardPalying == true) {
				return;
			}
			if (currentFrame < 100) {
				currentFrame = currentFrame + 1;
			} else {
				clearInterval(playForwardInterval);
				forwardPalying = false;
			}
		} else if (type == 'backward') {
			if (introPlaying == true || forwardPalying == true) {
				return;
			}
			if (currentFrame > 0) {
				currentFrame = currentFrame - 1;
			} else {
				clearInterval(playBackwardInterval);
				backwardPalying = false;
			}
		}
	};
	let scrollSpeed = 0;
	onMount(() => {
		introPlaying = true;
		playInterval = setInterval(() => {
			play('init');
		}, 30);
		const getScrollSpeed = (settings) => {
			var lastPos,
				newPos,
				timer,
				delta,
				delay = 50; // in "ms" (higher means lower fidelity )

			function clear() {
				lastPos = null;
				delta = 0;
			}

			clear();

			return function () {
				newPos = $scrollY;
				if (lastPos != null) {
					// && newPos < maxScroll
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
	let introScrolling = false;
	const preventWhilePlaying = (event) => {
		if (introPlaying == true || forwardPalying == true) {
			event.preventDefault();
			return;
		}
	};
	let showSlogan = true;
	let frames = [];
	let framesImages = [];
	for (let i = 1; i < 101; i++) {
		frames.push(i + 1);
	}
	let currentFrame = 2;
	let lastScroll = 0;
	// $: variatorFrame = (currentFrame + (( parseFloat(scrollSpeed) - parseInt(scrollSpeed) ) / 10 / (1 / 42.4)));
	let detectScroll = (event) => {
		if ($scrollY < $innerHeight) {
			if (introPlaying == true) {
				event.preventDefault();
				return;
			}
			if ($scrollY > lastScroll) {
				if (currentFrame >= 2 && currentFrame <= 100) {
					forwardPalying = true;
					playForwardInterval = setInterval(() => {
						play('forward');
					}, 300);
				}
			} else {
				if (currentFrame >= 42 && currentFrame <= 100) {
					backwardPalying = true;
					playBackwardInterval = setInterval(() => {
						play('backward');
					}, 300);
				}
			}
		}
		lastScroll = $scrollY;
	};
	let currentActive = 0;
</script>

<svelte:head>
	{#each frames as frame, index}
		<link
			rel="preload"
			as="image"
			href={base + assets + '/frames/intro/medium/frame_' + index + '_medium.jpg'}
			media="(min-width:960px)"
		/>
	{/each}
</svelte:head>
<svelte:window
	on:mousewheel|nonpassive={preventWhilePlaying}
	on:scroll|nonpassive={detectScroll}
	on:touchmove|nonpassive={preventWhilePlaying}
/>

<section>
	{#each frames as frame, index}
		{#if parseInt(currentFrame) == frame}
			<div
				class="frame active"
				style="background-image:url({base +
					assets +
					'/frames/intro/medium/frame_' +
					frame +
					'_medium.jpg'})"
			/>
		{:else}
			<div
				class="frame"
				style="background-image:url({base +
					assets +
					'/frames/intro/medium/frame_' +
					frame +
					'_medium.jpg'})"
			/>
		{/if}
	{/each}
	<div class="slogan">
		{#if showSlogan}
			<p in:fly={{ delay: 100, y: 200, duration: 800 }} class="slogan">
				A Piece of Blockchain on Your Desk
			</p>
		{/if}
	</div>
</section>

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
		/* pointer-events: none; */
		width: 100%;
		inset: 0;
		height: 100%;
		z-index: 0;
		display: none;
		visibility: hidden !important;
		background-position: bottom center;
		background-size: 100%;
		background-repeat: no-repeat;
	}
	div.frame.active {
		display: block;
		visibility: visible !important;
	}
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
		top: 60px;
		left: 0;
		right: 0;
		bottom: 0;
		transition: opacity 0.3s;
	}
	.slogan {
		position: absolute;
		width: fit-content;
		height: fit-content;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		pointer-events: none;
		z-index: 3;
	}
	p {
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
	}
</style>
