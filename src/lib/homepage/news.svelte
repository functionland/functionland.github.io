<script>
	import Blog from '$lib/components/blog/index.svelte';
</script>

<section>
	<div class="container">
		<div class="wrapper">
			<h4>Latest News</h4>
			<p>Checkout what is new about Functionland</p>
			<Blog />
		</div>
	</div>
</section>

<style>
	section {
		min-height: unset;
		height: unset;
		max-width: 100vw;
		overflow: hidden;
	}
	.wrapper {
		/* min-height: var(--section-min-height); */
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
</style>
