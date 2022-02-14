<script context="module">
	export const prerender = true;
	export const intro = true;
	
</script>

<script>
	import { scrollY, innerHeight, innerWidth } from 'svelte-window-stores/viewport';
	import { assets } from '$app/paths';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
import { debug } from 'svelte/internal';
	let videoRef
	let src = assets + `videos/intro.webm`;
	let fps = 30;
	let mstopTarget = 1.333333333333333333333333333;
	let dstopTarget = 1.44444444444444444444444444;
	$: stopTarget = $innerWidth < 960 ? mstopTarget : dstopTarget;
	$: stopFrame = parseInt(stopTarget * fps);
	$: currentFrame = parseInt(fps * time);
	let mthreshold = 2.232709;
	let dthreshold = 2.1;
	$: threshold = $innerWidth < 960 ? mthreshold : dthreshold;
	$: thresholdFrame = parseInt(threshold * fps);
	let initialPlayBackDone = false;
	const pauseNearTarget = (event) => {
		if (currentFrame > ((thresholdFrame / 2) + (stopFrame / 3))) {
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
					event.target.pause()
				}
			}
		} else {
			if (currentFrame >= thresholdFrame) {
				time = thresholdFrame/fps;
				if (videoRef != undefined && videoRef.paused != true) {
					videoRef.pause();
					return;
				} else {
					event.target.pause()
					return;
				}
			}
		}
	};
	let deltaY
	const mouseWheelEvent = (event) => {
		if (initialPlayBackDone != true) {
			event.preventDefault();
			return;
		}
		deltaY = event.deltaY;
	};
	$: remainingDuration = (thresholdFrame - stopFrame) / fps;
	$: onMount(() => {
		// videoRef.playbackRate = 0.75;
		// videoRef.defaultPlaybackRate = 0.75;
	});
	let showSlogan = false;

	$: calculated_time = (remainingDuration * ($scrollY / $innerHeight) / 1.3) + (stopFrame/fps);
	$: time = calculated_time <= threshold ? calculated_time : threshold;
</script>
	
<section on:mousewheel={mouseWheelEvent}>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		bind:this={videoRef}
		bind:currentTime={time}
		on:timeupdate={pauseNearTarget}
		id="normal"
		autoplay
		muted
		playsinline
		width="100%"
		{src}
	/>
	<div>
	{#if showSlogan}
		<h1 in:fly={{delay:100, y: 200, duration: 800}} out:fly={{ delay:300, y: 200, duration: 1960 }} class="slogan">A Piece of Blockchain on Your Desk</h1>
	{/if}
	</div>
</section>
<style>
	section {
		/* height: calc(100vh - 60px); */
		height: calc(100vh - 60px);
		position: relative;
		z-index: 1;
	}
	div {
		position: absolute;
		width: fit-content;
		height: fit-content;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		text-align: center;
		pointer-events: none;
		/* position: relative;
		width: 100%;
		height: 100%; */
		/* overflow: hidden;
        background: var(--body-gradient); */
	}
	video {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 0;
		width: auto;
		height: calc(100vh - 60px);
		z-index: 0;
		transition: opacity 0.3s;
	}

	h1 {
		max-width: calc(100% - 100px);
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
		h1 {
			max-width: calc(100% - 300px);
			word-break: unset;
		}
	}
	@media (prefers-color-scheme: dark) {
		div {
			background: transparent;
		}
	}
	/* @media(min-width: 960px) {
        div {
            right: 0;
            left: 0;
            text-align: center;
        }
    } */
</style>
