<script context="module">
	export const prerender = true;
</script>

<script>
	export let data;
	let videos = data.videos ? data.videos.length > 0 ? data.videos : false : false;
</script>

<div>
	<h3>{data.title}</h3>
	<p>{data.description}</p>
	{#if videos != false}
		<video playsinline width="100%" muted>
			{#each data.videos as video}
				<source src={video.src} type={video.type} media={video.media} />
			{/each}
			This browser does not support the HTML5 video element.
		</video>
	{/if}
</div>

<style>
	div {
		max-width: var(--description-max-width);
	}
	h3 {
		font-size: var(--description-title-font-size);
		line-height: var(--description-title-line-height);
		font-weight: var(--description-title-font-weight);
		text-align: center;
		padding: var(--description-title-padding);
	}
	p {
		font-size: var(--description-desc-font-size);
		line-height: var(--description-desc-line-height);
	}
</style>
