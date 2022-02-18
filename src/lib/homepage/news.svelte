<script context="module">
	export const prerender = true;
	export const hydrate = true;
</script>

<script>
	import Blog from '$lib/components/blog/index.svelte';
</script>
<section>
	<h4>Latest News</h4>
	<p>Access your favourite apps without the need to pay!</p>
	<div>
		<Blog />
	</div>
</section>


<style>
	section {
		min-height: var(--section-min-height);
		padding: 40px 0 80px;
	}
	h4 {
		font-size: var(--section-title-font-size);
		line-height: var(--section-title-line-height);
		text-align: center;
		padding-bottom: 2rem;
	}
	p {
		max-width: calc(100% - 120px);
		margin: 0 auto;
		text-align: center;
		padding-bottom: 20px;
	}
	div {
		display: grid;
		grid-auto-flow: row;
		grid-row-gap: 16px;
		max-width: calc(100% - 32px);
		margin: 0 auto;
	}
</style>