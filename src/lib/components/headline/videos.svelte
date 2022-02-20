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
        unobserveOnEnter: false,
    };
    const handleChange = ({ detail }) => {
        isInView = detail.inView;
        scrollDirection = detail.scrollDirection.vertical;
		// preloadTriggered = true;
    };
	onMount(() => {
		const loadLazyVideos = () => {
			var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
			if ("IntersectionObserver" in window) {
				var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
				entries.forEach(function(video) {
					if (video.isIntersecting) {
					for (var source in video.target.children) {
						var videoSource = video.target.children[source];
						if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
						videoSource.src = videoSource.dataset.src;
						}
					}

					video.target.load();
					video.target.classList.remove("lazy");
					lazyVideoObserver.unobserve(video.target);
					}
				});
				});

				lazyVideos.forEach(function(lazyVideo) {
				lazyVideoObserver.observe(lazyVideo);
				});
			}
		}
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
		docReady(loadLazyVideos);
	});
    // let preloadTriggered = false;
	$: loopClass = ended == true ? 'visible' : 'hidden';
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
	<div class="{data.ref} de-contain video-wrapper"  use:inview={options} on:change={handleChange}>
		{#if data.ref === 'earn-crypto'}
			<video
				bind:ended
				autoplay
				loop
				playsinline
				muted
				class={`${data.ref} ${data.ref}-main lazy`}
			>
				<source data-src={videos[0].src} type={videos[0].type} decoding="async" />
				{browserSupportText}
			</video>
			<!-- <video autoplay loop playsinline muted class={`${data.ref} ${data.ref}-loop ${loopClass}`}>
				<source src={videos[1].src} type={videos[1].type} />
				{browserSupportText}
			</video> -->
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
					<!-- <Video video={video} ref={item.ref}/> -->
				{/if}
			{/each}
		{/if}
	</div>
{/if}

<style>
	.video-wrapper {
		width: 100%;
		height: 100%;
		overflow: hidden;
    	padding-top: 90%;
	}
	.video-wrapper:not(.earn-crypto) {
		position: relative;
		z-index: 0;
		padding-top: 0;
		aspect-ratio: 390/450;
		width: 100%;
	}
	.video-wrapper.earn-crypto {
    	background: #4c4d51;
	}
	video {
		position: absolute;
		z-index: 0;
	}
	video.own-your-data {
		height: 200%;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	video.earn-crypto {
		width: 175%;
		top: unset;
		bottom: -10%;
		left: 50%;
		transform: translateX(-50%);
	}
	video.customizable {
		width: 100%;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
		/* position: relative; */
	}
	video.visible {
		z-index: 0;
	}
	video.hidden {
		z-index: -1;
	}

	.video-wrapper.customizable {
		position: relative;
		z-index: unset;
		background: var(--bkg);
	}
	.video-wrapper.customizable video.customizable {
		width: 120%;
		top: unset;
		bottom: 0;
		transform: translateX(-50%);
	}
	@media (min-width: 960px) {
		.video-wrapper:not(.earn-crypto),.video-wrapper {
			aspect-ratio: 3/1;
			width: 100%;
			padding-top: 0;
		}
		.video-wrapper.customizable {
			grid-column: 1 /2;
			grid-row: 1/-1;
		}
		.video-wrapper.customizable video.customizable {
			/* width: 100%; */
			width: unset;
			height: 100%;
			top: unset;
			bottom: 0;
			transform: translateX(-45%);
		}
		.video-wrapper.own-your-data {
			background: var(--bkg);
		}
		.video-wrapper.own-your-data video.own-your-data {
			width: 135%;
			height: unset;
		}
		.video-wrapper.earn-crypto {
			background: var(--bkg);
		}
		.video-wrapper.earn-crypto video.earn-crypto {
			max-width: 100%;
			bottom: -35%;
		}
		video.earn-crypto {
			/* width: 100%;
			height: auto;
			top: unset;
			left: unset;
			transform: unset;
			bottom: -20%; */
		}
	}
	@media (min-width: 1900px) {
		.video-wrapper.own-your-data {
			aspect-ratio: 3/1.2;
		}
		.video-wrapper.own-your-data video.own-your-data {
			max-width: 100%;
			height: unset;
		}
		video.earn-crypto {
			bottom: -42%;
			/* bottom: -45%; */
			/* bottom: -40%; */
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
