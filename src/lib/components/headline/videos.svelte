<script context="module">
	export const prerender = true;
	export const hydrate = true;
</script>
<script>
	import { prefersColorScheme } from 'svelte-window-stores/appearance';
    import { inview } from 'svelte-inview';
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
		preloadTriggered = true;
    };
    let preloadTriggered = false;
	$: loopClass = ended == true ? 'visible' : 'hidden';
</script>
<svelte:head>
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
</svelte:head>
{#if videos}
	<div class="{data.ref} de-contain video-wrapper"  use:inview={options} on:change={handleChange}>
		{#if data.ref === 'earn-crypto'}
			<video
				autoplay
				loop
				bind:ended
				playsinline
				muted
				class={`${data.ref} ${data.ref}-main `}
			>
				<source src={videos[0].src} type={videos[0].type} loading="{preloadTriggered == true ? 'eager' : 'lazy'}" decoding="async" />
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
							<video loop playsinline muted class={data.ref} loading="{preloadTriggered == true ? 'eager' : 'lazy'}" decoding="async">
								<source src={video.src} type={video.type} />
								{browserSupportText}
							</video>
						{:else}
							<video autoplay loop playsinline muted class={data.ref} loading="{preloadTriggered == true ? 'eager' : 'lazy'}" decoding="async">
								<source src={video.src} type={video.type} />
								{browserSupportText}
							</video>
						{/if}
						<!-- <Video video={video} ref={item.ref}/> -->
					{/if}
				{:else}
					{#if data.ref === 'customization'}
						<video loop playsinline muted class={data.ref} loading="{preloadTriggered == true ? 'eager' : 'lazy'}" decoding="async">
							<source src={video.src} type={video.type} />
							{browserSupportText}
						</video>
					{:else}
						<video autoplay loop playsinline muted class={data.ref} loading="{preloadTriggered == true ? 'eager' : 'lazy'}" decoding="async">
							<source src={video.src} type={video.type} />
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
	@media (prefers-color-scheme: dark) {
		.video-wrapper.customizable video.customizable {
			mix-blend-mode: overlay;
		}
	}
	@media (min-width: 960px) {
		.video-wrapper:not(.earn-crypto),.video-wrapper {
			aspect-ratio: 3/1;
			width: 100%;
			padding-top: 0;
		}
		.video-wrapper video {
			width: 100%;
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
		video.own-your-data {
			/* width: 100%; */
		}
		.video-wrapper:not(.earn-crypto) {
			/* height: 100%; */
			/* padding-top: 0; */
		}
		.video-wrapper.earn-crypto {
			/* padding-top: 0; */
		}
		video.own-your-data {
			/* height: unset;
			width: unset;
			max-height: 250%;
    		max-width: 150%;
			top: 35%;
			left: 50%;
			transform: translate(-50%, -50%); */
		}
		video.earn-crypto {
			bottom: -30%;
			/* width: 100%;
			height: auto;
			top: unset;
			left: unset;
			transform: unset;
			bottom: -20%; */
		}
	}
	@media (min-width: 1900px) {
		video.earn-crypto {
			bottom: -42%;
			/* bottom: -45%; */
			/* bottom: -40%; */
		}
	}
	@media (min-width: 1900px) and (min-height: 1000px) {
		.video-wrapper:not(.earn-crypto),.video-wrapper {
			aspect-ratio: 16/9;
		}
		.video-wrapper.customizable {
			aspect-ratio: 3/1;
		}
		.video-wrapper.customizable video.customizable {
			transform: translateX(-45%);
			aspect-ratio: 3/2;
			width: unset;
			height: 100%;
		}
		section,.wrapper {
			aspect-ratio: 16/9;
		}
	}
</style>
