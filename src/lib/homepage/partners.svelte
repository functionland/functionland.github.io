<script context="module">
	export const prerender = true;
	export const hydrate = true;
</script>
<script>
	import Slider from '$lib/components/partners/slider.svelte';
</script>
<section>
	<h5>Our Partners</h5>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
	<Slider />
</section>
<style>
	h5 {
		font-size: var(--section-title-font-size);
		line-height: var(--section-title-line-height);
		text-align: center;
		padding-bottom: 2rem;
	}
	section {
		min-height: var(--section-min-height);
	}
	p {
		
		max-width: calc(100% - 120px);
		margin: 0 auto;
		text-align: center;
		padding-bottom: 20px;
	}
</style>