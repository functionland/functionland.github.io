<script context="module">
	export const prerender = true;
</script>
<script>
    import  { prefersColorScheme } from 'svelte-window-stores/appearance';
    export let data;
	let videos = data.videos ? data.videos.length > 0 ? data.videos : false : false;
    let browserSupportText = "Your browser does not support the video element.";
	$: colorScheme = $prefersColorScheme === 0 ? "light" : "dark";
</script>
{#if videos != false}
	<div class="{data.ref}">
		{#each videos as video}
			{#if video.scheme !== undefined} 
				{#if colorScheme === video.scheme}
					<video src={video.src} autoplay loop playsinline muted class="{data.ref}">{browserSupportText}</video>
					<!-- <Video video={video} ref={item.ref}/> -->
				{/if}
			{:else}
				<video src={video.src} autoplay loop playsinline muted class="{data.ref}">{browserSupportText}</video>
				<!-- <Video video={video} ref={item.ref}/> -->
			{/if}
		{/each}
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
	/* div.own-your-data:before,
	div.own-your-data:after {
		content: "";
		position: absolute;
		left: 0;
		width: 100%;
		height: 30px;
		z-index: 2;
	}
	div.own-your-data:before {
		top: 0;
		background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,0.01) 100%);
	}
	div.own-your-data:after {
		bottom: 0;
		background: linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(255,255,255,0.01) 100%);
	} */
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
</style>