<script>
	import { prefersColorScheme } from 'svelte-window-stores/appearance';
	import { inview } from 'svelte-inview';
	import { onMount } from 'svelte';
	export let data;
	let videos = data.videos ? (data.videos.length > 0 ? data.videos : false) : false;
	let browserSupportText = 'Your browser does not support the video element.';
	$: colorScheme = $prefersColorScheme === 0 ? 'light' : 'dark';
	let ended;
	let isInView;
	let scrollDirection;
	const options = {
		rootMargin: '150px',
		unobserveOnEnter: false
	};
	const handleChange = ({ detail }) => {
		isInView = detail.inView;
		scrollDirection = detail.scrollDirection.vertical;
		// preloadTriggered = true;
	};
	onMount(() => {
		const loadLazyVideos = () => {
			var lazyVideos = [].slice.call(document.querySelectorAll('video.lazy'));
			if ('IntersectionObserver' in window) {
				var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
					entries.forEach(function (video) {
						if (video.isIntersecting) {
							for (var source in video.target.children) {
								var videoSource = video.target.children[source];
								if (typeof videoSource.tagName === 'string' && videoSource.tagName === 'SOURCE') {
									videoSource.src = videoSource.dataset.src;
								}
							}

							video.target.load();
							video.target.classList.remove('lazy');
							lazyVideoObserver.unobserve(video.target);
						}
					});
				});

				lazyVideos.forEach(function (lazyVideo) {
					lazyVideoObserver.observe(lazyVideo);
				});
			}
		};
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
		docReady(loadLazyVideos);
	});
	// let preloadTriggered = false;
	// $: loopClass = ended == true ? 'visible' : 'hidden';
</script>

<!-- <svelte:head>
	{#if preloadTriggered}
		{#if data.ref === 'earn-crypto'}
			<link rel="preload" href={videos[0].src} as="video" type={videos[0].type} />
		{:else}
			{#each videos as video}
				{#if preloadTriggered == true}
					{#if video.scheme !== undefined}
						{#if colorScheme === video.scheme}
							<link rel="preload" href={video.src} type={video.type} as="video" media={`(preferes-color-scheme: ${colorScheme})`} />
						{/if}
					{:else}
						<link rel="preload" href={video.src} type={video.type} as="video" media={`(preferes-color-scheme: ${colorScheme})`} />
					{/if}
				{/if}
			{/each}
		{/if}
	{/if}
</svelte:head> -->
{#if videos}
	<div class="{data.ref} de-contain video-wrapper" use:inview={options} on:change={handleChange}>
		{#if data.ref === 'earn-crypto'}
			<video bind:ended autoplay loop playsinline muted class={`${data.ref} ${data.ref}-main lazy`}>
				<source data-src={videos[0].src} type={videos[0].type} decoding="async" />
				{browserSupportText}
			</video>
		{:else}
			{#each videos as video}
				{#if video.scheme !== undefined}
					{#if colorScheme === video.scheme}
						{#if data.ref === 'customization'}
							<video autoplay loop playsinline muted class={`${data.ref} lazy`} decoding="async">
								<source data-src={video.src} type={video.type} />
								{browserSupportText}
							</video>
						{:else}
							<video autoplay loop playsinline muted class={`${data.ref} lazy`} decoding="async">
								<source data-src={video.src} type={video.type} />
								{browserSupportText}
							</video>
						{/if}
					{/if}
				{:else}
					{#if data.ref === 'customization'}
						<video autoplay loop playsinline muted class={`${data.ref} lazy`} decoding="async">
							<source data-src={video.src} type={video.type} />
							{browserSupportText}
						</video>
					{:else}
						<video autoplay loop playsinline muted class={`${data.ref} lazy`} decoding="async">
							<source data-src={video.src} type={video.type} />
							{browserSupportText}
						</video>
					{/if}
				{/if}
			{/each}
		{/if}
	</div>
{/if}

<style>
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
			/* width: unset;
			height: 100%;
			top: unset;
			bottom: 0;
			transform: translateX(-45%); */
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
</style>
