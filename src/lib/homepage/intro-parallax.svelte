<script>
	import { innerWidth, innerHeight } from 'svelte-window-stores/viewport';
	import { assets } from '$app/paths';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	let playInterval,
		showSlogan = false,
		frames = [],
		introPlaying = false,
		lastScroll,
		scrollY,
		currentFrame = 1,
		introDonePlaying = false;
	$: isMobile = $innerWidth < 960
	let totalFrames = $innerWidth < 960 ? 66 : 59
	$: threshold = isMobile ? 47 : 37;
	for (let i = 1; i < totalFrames + 1; i++) {
		frames.push(i);
	}
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
		if (introDonePlaying == true) {
			return;
		}
		introPlaying = true;
		playInterval = setInterval(() => {
			if (currentFrame < threshold) {
				currentFrame++
			} else {
				clearInterval(playInterval);
				introPlaying = false;
				introDonePlaying = true;
			}
		}, 1.4 * (1 / 42.4) * 1000);
	};
	
	const detectScroll = (event) => {
		if (currentFrame < threshold) {
			event.preventDefault();
			return;
		}
		if (introPlaying == true) {
			return;
		}
		if (scrollY > lastScroll) {
			currentFrame =  parseInt((scrollY * frames.length) / ( isMobile ? ($innerHeight / 100) * 310 : ($innerHeight / 100) * 225 )) + threshold;
			
		} else {
			currentFrame =  parseInt((scrollY * frames.length) / ( isMobile ? ($innerHeight / 100) * 310 : ($innerHeight / 100) * 225 )) + threshold;
			
		}
		lastScroll = scrollY;
	};
	onMount(() => {
		docReady(play);
		showSlogan = true;
	});
	$: heightVar = currentFrame <= threshold ? 'calc( 100vh - 60px)' : 'auto';
	const fadeIn = {
		reveal: [
			{ duration: 400, delay: 300 },
			{ duration: 400, delay: 600 },
			{ duration: 400, delay: 900 },
			{ duration: 400, delay: 1200 },
			{ duration: 400, delay: 1400 },
			{ duration: 400, delay: 1600 },
			{ duration: 400, delay: 1800 },
			{ duration: 400, delay: 1800 },
		],
		none: { duration: 0, delay: 0 }
	}
</script>
<svelte:head>
	{#each frames as frame, index}
		{#if isMobile == true}
			<link rel="preload" as="image" href={assets + '/frames/intro/mobile/frame_' + frame + '.jpeg'} type="image/jpeg" media="(max-width: 720px)">
		{:else}
			<link rel="preload" as="image" href={assets + '/frames/intro/desktop/frame_' + frame + '.jpeg'} type="image/jpeg" media="(min-width: 721px)">
		{/if}
	{/each}
</svelte:head>
<svelte:window bind:scrollY={scrollY} on:scroll={detectScroll}/>
<b>currentFrame {currentFrame}</b>
<section>
	<div class="parallax-container">
		{#each frames as frame}
			{#if (isNaN(currentFrame) && frame == 1) || frame === parseInt(currentFrame) }
				<div class="frame active frame_{frame}">
					<picture>
						<source
							media="(min-width:721px)"
							srcset={assets + '/frames/intro/desktop/frame_' + frame + '.jpeg'}
							type="image/jpeg" width="1920" height="1080"
						/>
						<source
							media="(max-width:720px)"
							srcset={assets + '/frames/intro/mobile/frame_' + frame + '.jpeg'}
							type="image/jpeg" width="720" height="1080"
						/>
						<img src={assets + '/frames/intro/desktop/frame_' + frame + '.jpeg'} alt=""  style="{`--heightVar:${heightVar}`}"/>
					</picture>
				</div>
			{:else} 
				<div class="frame frame_{frame}">
					<picture>
						<source
							media="(min-width:720px)"
							srcset={assets + '/frames/intro/desktop/frame_' + frame + '.jpeg'}
							type="image/jpeg" width="1920" height="1080"
						/>
						<source
							media="(max-width:721px)"
							srcset={assets + '/frames/intro/mobile/frame_' + frame + '.jpeg'}
							type="image/jpeg" width="720" height="1080"
						/>
						<img src={assets + '/frames/intro/desktop/frame_' + frame + '.jpeg'} alt=""  style="{`--heightVar:${heightVar}`}"/>
					</picture>
				</div>
			{/if}
		{/each}
		<div class="frame frame_{frames.length+1}">
		</div>
	</div>
	<div class="slogan-wrapper" style="opacity: {1 - Math.max(0, scrollY / 40)}">
		<h1 class="slogan">
			{#if showSlogan}
				<span class="one-liner">
					<span class="bold"
						in:fade={ fadeIn.reveal[0] }
					>Box </span>
					<span
						in:fade={ fadeIn.reveal[1] }
					>by </span>
					<span class="teal-text"
						in:fade={ fadeIn.reveal[2] }
					>Functionland </span>
				</span>
				<span
					in:fade={ fadeIn.reveal[3] }
				>The Private, </span>
				<span
					in:fade={ fadeIn.reveal[4] }
				>Payless, </span>
				<span class='l-one-liner'>
					<span class='m-one-liner'
						in:fade={ fadeIn.reveal[5] }
					>Cloud Storage </span>
					<span
						in:fade={ fadeIn.reveal[6] }
					>Alternative</span>
				</span>
			{:else}
				<span class="one-liner hidden">
					<span class="bold">Box </span>
					<span>by </span>
					<span class="teal-text">Functionland </span>
				</span>
				<span class='hidden'>The Private, </span>
				<span class='hidden'>Payless, </span>
				<span class='hidden'>Cloud Storage </span>
				<span class='hidden'>Alternative</span>
			{/if}
		</h1>
	</div>
</section>
<style>
	b {
		position: fixed;
		top: 550px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 30;
		font-size: 1.5em;
		color: #fff;
		background: #000;
	}
	.hidden {
		opacity: 0;
		user-select: none;
		display: none;
	}
	section {
		height: unset;
		min-height: unset;
		padding-bottom: 0;
		position: sticky;
		top: 60px;
	}
	.parallax-container {
		position: sticky;
		height: 125vh;
		top: 60px;
		width: 100vw;
	}
	.parallax-container img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
	.parallax-container img:last-child::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgb(45,10,13);
	}
	.frame {
		width: -webkit-fill-available;
		grid-column: 1/-1;
		grid-row: 1/-1;
		height: min-content;
		height: 100%;
		align-items: end;
		align-content: end;
		justify-content: center;
		visibility: hidden;
		display: none;
		position: sticky;
		top: 0;
		z-index: -1;
		margin: 0 auto;
		width: 100%;
		height: fit-content;
		max-width: var(--container-max-width);
		/* overflow: hidden; */
		width: -webkit-fill-available;
	}
	.frame.active {
		visibility: visible;
		display: grid;
		z-index: 1;
	}
	.frame picture {
		/* overflow: hidden; */
		display: grid;
		align-content: end;
		align-items: end;
		justify-content: center;
		height: 100%;
		width: 100%;
		max-width: var(--container-max-width);
	}
	.frame img {
		position: relative;
		top: unset;
		width: unset;
		height: auto;
		transition: height 0.3s;
		max-width: unset;
		left: unset;
		transform: unset;
	}
	.slogan-wrapper {
		pointer-events: none;
		position: fixed;
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
    	mix-blend-mode: screen;
		max-width: var(--container-max-width);
	}
	h1 {
		color: var(--actionColor);
		pointer-events: none;
		font-family: var(--roboto);
		font-size: var(--slogan-font-size);
		font-weight: var(--slogan-font-weight);
		line-height: var(--slogan-line-height);
		letter-spacing: var(--slogan-letter-spacing);
		text-align: center;
		max-width: var(--slogan-max-width);
		font-family: var(--raleway);
		margin: 0 auto;
		word-break: break-word;
		position: relative;
		z-index: 4;
    	mix-blend-mode: screen;
	}
	@media (max-width: 720px) {
		.m-one-liner {
			display: block;
		}
		.parallax-container {
			position: sticky;
			margin-bottom: -30vh;
		}
		.frame img {
			transform: unset;
			max-width: calc( ( (1080 / 720) * 100vw ) - 60px);
			max-height: unset;
		}
	}
	@media (min-width: 721px) {
		h1 {
			word-break: unset;
		}
		.one-liner, .l-one-liner {
			display: block;
		}
		.parallax-container {
			height: calc( (100vh / 100) * 125);
			margin-bottom: -25vh;
		}
		.frame {
			width: -webkit-fill-available;
			grid-column: 1/-1;
			grid-row: 1/-1;
			height: min-content;
			height: 100%;
			align-items: end;
			align-content: end;
			justify-content: center;
			visibility: hidden;
			display: none;
			position: sticky;
			top: 0;
			z-index: -1;
			margin: 0 auto;
			width: 100%;
			height: fit-content;
			max-width: var(--container-max-width);
			/* overflow: hidden; */
			width: -webkit-fill-available;
		}
		.frame.active {
			visibility: visible;
			display: grid;
			z-index: 1;
		}
		.frame picture {
			/* overflow: hidden; */
			display: grid;
			align-content: end;
			align-items: end;
			justify-content: center;
			height: 100%;
			width: 100%;
			max-width: var(--container-max-width);
		}
		.frame img {
			position: relative;
			top: unset;
			width: unset;
			height: auto;
			transition: height 0.3s;
			left: unset;
			transform: translateY(-20%);
			max-height: calc( ( (1920 / 1080) * 100vh ) - 360px);
			/* max-height: calc( ( (1920 / 1080) * 100vh ) - 360px); */
			max-width: calc( ( (1920 / 1920) * 100% ) - 1px);
		}
		
	}
	@media (min-width: 1900px) {
		.frame img {
			max-width: unset;
		}
	}
</style>
