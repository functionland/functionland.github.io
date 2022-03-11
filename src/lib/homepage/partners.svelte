<script>
	import Slider from '$lib/components/partners/slider.svelte';
</script>

<section>
	<div class="container">
		<div class="wrapper">
			<h5>Our Partners</h5>
			<p>
				Functionland is backed by the biggest names in Web3 and investment world
			</p>
			<Slider />
		</div>
	</div>
</section>

<style>
	h5 {
		font-size: var(--section-title-font-size);
		line-height: var(--section-title-line-height);
		text-align: center;
		padding-bottom: 2rem;
	}
	.wrapper {
		min-height: var(--section-min-height);
	}
	p {
		max-width: calc(100% - 120px);
		margin: 0 auto;
		text-align: center;
		padding-bottom: 20px;
	}
	@media (min-width: 960px) {
		section,
		.wrapper {
			min-height: unset;
			height: auto;
		}
		section {
			padding-bottom: 8rem;
		}
	}
</style>
