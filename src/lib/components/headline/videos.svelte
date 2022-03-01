<script>
	import FadeIn from '$lib/components/FadeIn.svelte';
	import { innerWidth } from 'svelte-window-stores/viewport';
	import { prefersColorScheme } from 'svelte-window-stores/appearance';
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	export let data;
	let videos = data.videos ? (data.videos.length > 0 ? data.videos : false) : false;
	let browserSupportText = 'Your browser does not support the video element.';
	$: colorScheme = $prefersColorScheme === 0 ? 'light' : 'dark';
	const observer = {
		inview: false,
		options: {
			rootMargin: '150px',
			unobserveOnEnter: false
		},
		scrollDirection: '',
		change:({ detail }) => {
			observer.inview = detail.inView;
			observer.scrollDirection = detail.scrollDirection.vertical;
			if (detail.inView == true) {
				let video = detail.node.querySelector('video')
				if (data.ref === 'earn-crypto') {
					if ($innerWidth < 960) {
						detail.node.querySelector('video.mobile-video')
					} else {
						detail.node.querySelector('video.desktop-video')
					}
				}
				if (video.paused) {
					setTimeout(() => {
						video.play();
					}, 1200);
				}
			}
		},
	}
	const playVideo = event => {
		if (event.target.paused) {
			event.target.play();
		}
	}
	const playWithDelay = event => {
		setTimeout(() => {
			event.target.play();
		}, 1200);
	}
	let custCurrentTime, custDuration
	const scaleOnTime = event => {
		if (custCurrentTime > custCurrentTime / 3 && custCurrentTime < ((custDuration / 3) * 2)) {
			event.target.style.transform = 'scale(1)';
		} else {
			event.target.style.transform = 'scale(2.2)';
		}
	}
</script>
{#if videos}
	<div class="{data.ref} de-contain video-wrapper" use:inview={observer.options} on:change={observer.change}
        class:animate={observer.inview && data.ref === 'customizable'}
        class:animateFromBottom={observer.scrollDirection === 'down' && data.ref === 'customizable'}
        class:animateFromTop={observer.scrollDirection !== 'down' && data.ref === 'customizable'}>
		{#if data.ref === 'earn-crypto'}
			<FadeIn inview={observer} delay={1.2} inheritbg={true}>
				<video src={videos[1].src} type={videos[1].type} decoding="async" playsinline muted class={`${data.ref} ${data.ref}-main desktop-video`} on:click={playVideo} on:loadedmetadata={playWithDelay}>
					<source src={videos[0].src} type={videos[0].type} decoding="async" media="(max-width: 959px)"/>
					{browserSupportText}
				</video>
				<video src={videos[0].src} type={videos[0].type} decoding="async" playsinline muted class={`${data.ref} ${data.ref}-main mobile-video`} on:click={playVideo} on:loadedmetadata={playWithDelay}>
					{browserSupportText}
				</video>
			</FadeIn>
		{:else}
			{#each videos as video}
				{#if video.scheme !== undefined}
					{#if colorScheme === video.scheme}
						{#if data.ref === 'customizable'}
							<FadeIn inview={observer} delay={.3} inheritbg={true}>
								<video playsinline muted class={`${data.ref} `} decoding="async" on:click={playVideo} on:loadedmetadata={playWithDelay}
								on:timeupdate={scaleOnTime} bind:currentTime={custCurrentTime} bind:duration={custDuration} style="transition: transform 0.7s; transform: scale(2.4); transform-origin: bottom;">
									<source src={video.src} type={video.type} />
									{browserSupportText}
								</video>
							</FadeIn>
						{:else}
							<FadeIn inview={observer} delay={0.9} inheritbg={true}>
								<video
									playsinline muted class={`${data.ref} `} decoding="async" on:click={playVideo} on:loadedmetadata={playWithDelay}>
									<source src={video.src} type={video.type} />
									{browserSupportText}
								</video>
							</FadeIn>
						{/if}
					{/if}
				{:else}
					{#if data.ref === 'customizable'}
						<FadeIn inview={observer} delay={.3} inheritbg={true}>
							<video
								playsinline muted class={`${data.ref} `} decoding="async" on:click={playVideo} on:loadedmetadata={playWithDelay}>
								<source src={video.src} type={video.type} />
								{browserSupportText}
							</video>
						</FadeIn>
					{:else}
						<FadeIn inview={observer} delay={.6} inheritbg={true}>
							<video
								playsinline muted class={`${data.ref} `} decoding="async" on:click={playVideo} on:loadedmetadata={playWithDelay}>
								<source src={video.src} type={video.type} />
								{browserSupportText}
							</video>
						</FadeIn>
					{/if}
				{/if}
			{/each}
		{/if}
	</div>
{/if}

<style>
	.desktop-video {
		display: none;
	}
	.video-wrapper {
		position: relative;
		width: 100%;
		text-align: center;
		align-self: center;
	}
	video {
		max-width: 100%;
	}
	.video-wrapper.earn-crypto {
		position: relative;
		bottom: 0;
		width: 100%;
    	z-index: 0;
		padding-top: 80%;
		margin-bottom: -15%;
	}
	.video-wrapper.earn-crypto:before {
		content: '';
		background: linear-gradient(180deg, #4c4d51 60.48%, rgba(79, 80, 85, 0) 92.22%);
		top: -80%;
		left: 0;
		width: 100%;
		height: 20%;
		position: absolute;
		z-index: 1;
		pointer-events: none;
	}
	video.earn-crypto {
		max-width: unset;
		width: 150%;
		left: 50%;
    	bottom: -10%;
		transform: translateX(-50%);
		position: absolute;
	}
	.video-wrapper.video-wrapper.customizable {
		border-radius: 20px;
    	overflow: hidden;
	}
	@media (min-width: 960px) {
		.mobile-video {
			display: none;
		}
		.desktop-video {
			display: block;
		}
		.video-wrapper {
			position: relative;
			width: 100%;
			text-align: center;
    		overflow: hidden;
		}
		.video-wrapper.customizable {
			grid-row: 1/-1;
			grid-column: 1/-1;
    		border-radius: 20px;
			overflow: hidden;
			z-index: 1;
		}
		video {
			max-width: 600px;
			display: block;
			margin: 0 auto;
		}
		.video-wrapper.earn-crypto {
			position: relative;
			padding-top: 0;
			margin: unset;
			width: unset;
			height: unset;
			margin-top: -20vh;
		}
		video.earn-crypto {
			max-width: 100%;
			width: unset;
			left: 50%;
			bottom: 0;
			transform: translate(-50%, 0);
			position: relative;
		}
		
		.video-wrapper.earn-crypto:before {
    		top: -10%;
		}
		.video-wrapper.customizable {
			transform-origin: start;
			justify-self: start;
			position: absolute;
			left: 0;
			z-index: 1;
			top: 0;
			transform-origin: center;
			height: 100%;
			width: 100%;
			overflow: hidden;
            border-radius: 20px;
            overflow: hidden;
			align-items: center;
			display: grid;
		}
		.video-wrapper.customizable.animateFromTop {
			-webkit-animation: expand-to-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation: expand-to-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation-delay: 0.2s;
		}
		.video-wrapper.customizable.animateFromBottom {
			-webkit-animation: expand-to-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation: expand-to-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation-delay: 0.2s;
		}
		.video-wrapper.customizable.animate {
			-webkit-animation: collapse-from-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation: collapse-from-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation-delay: 0.2s;
		}
	}
	@media (prefers-color-scheme: dark) {
		.video-wrapper.customizable {
			background: #3a3f48;
		}
	}
</style>
<!-- <style>
	.video-wrapper {
		position: relative;
		aspect-ratio: 1/1;
		width: 100%;
		height: unset;
		overflow: hidden;
	}
	.video-wrapper.earn-crypto {
		position: absolute;
		aspect-ratio: 3/4;
		bottom: 0;
		width: unset;
		height: 100%;
	}
	.video-wrapper.customizable {
		aspect-ratio: 3/3.5;
		width: unset;
		height: 100%;
	}
	video {
		position: absolute;
		z-index: 0;
	}
	video.own-your-data {
		width: 250%;
		height: unset;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		aspect-ratio: 1/1;
		max-width: unset;
	}
	video.earn-crypto {
		width: 135%;
		height: unset;
		top: unset;
		bottom: -10%;
		left: 50%;
		transform: translateX(-50%);
		aspect-ratio: 1/1;
		max-width: unset;
	}
	video.customizable {
		width: 135%;
		height: unset;
		top: unset;
		bottom: -10%;
		left: 50%;
		transform: translateX(-50%);
		aspect-ratio: 1/1;
		max-width: unset;
	}
	video.visible {
		z-index: 0;
	}
	video.hidden {
		z-index: -1;
	}
	@media (min-width: 960px) {
		.video-wrapper {
			aspect-ratio: 1/1;
		}
		.video-wrapper.own-your-data {
			aspect-ratio: 16/6;
			align-self: start;
			align-self: center;
		}
		.video-wrapper.earn-crypto {
			background: #5F6067;
			aspect-ratio: 16/7;
			width: 100%;
			height: unset;
			position: relative;
			overflow: unset;
		}
		.video-wrapper.customizable {
    		height: var(--description-min-height);
			aspect-ratio: 2/3;
			grid-column: 1 /2;
			grid-row: 1/-1;
		}
		.video-wrapper.customizable video.customizable {
		}
		video.own-your-data {
			width: 100%;
			top: 37%;
		}
		video.earn-crypto {
			max-width: unset;
			width: 100%;
			bottom: -45%;
		}
	}
	@media (min-width: 1900px) {
		.video-wrapper.own-your-data {
			aspect-ratio: 3/1.1;
			height: 80%;
			width: unset;
			max-width: unset;
			align-self: center;
		}
		.video-wrapper.own-your-data video.own-your-data {
			max-width: 100%;
			height: unset;
		}
		video.earn-crypto {
			max-width: unset;
			width: 100%;
			bottom: -43%;
		}
	}
	@media (min-width: 1900px) and (min-height: 1000px) {
		.video-wrapper.customizable {
			aspect-ratio: 3/1;
		}
		.video-wrapper.customizable video.customizable {
			transform: translateX(-45%);
			aspect-ratio: 3/2;
			width: unset;
			height: 100%;
		}
	}
	@media (prefers-color-scheme: dark) {
		.video-wrapper.customizable video.customizable {
			mix-blend-mode: multiply;
		}
		.video-wrapper.own-your-data video.own-your-data {
			mix-blend-mode: multiply;
		}
	}
</style> -->
