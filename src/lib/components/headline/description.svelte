<script context="module">
	export const prerender = true;
</script>

<script>
	export let data;
</script>

<article>
	<h3>{data.title}</h3>
	<p>{data.description}</p>
	<!-- <div>{data.type}</div> -->
</article>

<style>
	article {
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
