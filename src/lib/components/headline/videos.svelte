<script context="module">
	export const prerender = true;
</script>
<script>
    import  { prefersColorScheme } from 'svelte-window-stores/appearance';
    export let data;
	let videos = data.videos ? data.videos.length > 0 ? data.videos : false : false;
    let browserSupportText = "Your browser does not support the video element.";
	$: colorScheme = $prefersColorScheme === 0 ? "light" : "dark";
	let ended
	$: loopClass = ended == true ? "visible" : "hidden";
	$: endClass = ended == true ? "hidden" : "visible";
</script>
{#if videos}
	<div class="{data.ref}">
		{#if data.ref === "earn-crypto"}
			<video autoplay bind:ended={ended} playsinline muted class="{`${data.ref} ${data.ref}-main ${endClass}`}">
				<source src={videos[0].src} type={videos[0].type} />
				{browserSupportText}
			</video>
			<video autoplay loop playsinline muted class="{`${data.ref} ${data.ref}-loop ${loopClass}`}">
				<source src={videos[1].src} type={videos[1].type} />
				{browserSupportText}
			</video>
		{:else}
			{#each videos as video}
				{#if video.scheme !== undefined} 
					{#if colorScheme === video.scheme}
						{#if data.ref === "customization"}
							<video loop playsinline muted class="{data.ref}">
								<source src={video.src} type={video.type} />
								{browserSupportText}
							</video>
						{:else}
							<video autoplay loop playsinline muted class="{data.ref}">
								<source src={video.src} type={video.type} />
								{browserSupportText}
							</video>
						{/if}
						<!-- <Video video={video} ref={item.ref}/> -->
					{/if}
				{:else}
					{#if data.ref === "customization"}
						<video loop playsinline muted class="{data.ref}">
							<source src={video.src} type={video.type} />
							{browserSupportText}
						</video>
					{:else}
						<video autoplay loop playsinline muted class="{data.ref}">
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
	div {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	div:not(.earn-crypto) {
		position: relative;
		z-index: 0;
	}
	video {
		position: absolute;
		z-index:0;
	}
	video.own-your-data {
		width: 200%;
		top: 35%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	video.earn-crypto {
		height: 100%;
		top: calc( 100% - (100% - 90px));
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

	div.customizable {
		position: relative;
		z-index: unset;
		background: var(--bkg);
	}
	div.customizable video.customizable {
		width: 120%;
		top: unset;
		bottom: 0;
		transform: translateX(-50%);
	}
	@media (prefers-color-scheme: dark) {
		div.customizable video.customizable {
			mix-blend-mode: overlay;
		}
	}
</style>