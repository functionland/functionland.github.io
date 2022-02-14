<script context="module">
	export const prerender = true;
</script>

<script>
	import { assets } from '$app/paths';
	import IntersectionObserver from "svelte-intersection-observer";
	import { fade } from 'svelte/transition';
	const heroImageDesktop = assets + 'images/home/hero-image-desktop.png';
	const heroImageMobile = assets + 'images/home/hero-image-mobile.jpg';

	let element;
	let intersecting;
</script>

<section>
	<IntersectionObserver {element} bind:intersecting>
	<div bind:this={element}>
		<div class="hero">
			<span>
				<span class="bold">Box </span> by <span class="teal-text">Functionland </span>
			</span>
			<span>The Private, </span>
			<span>Payless, </span>
			<span>Cloud Storage </span>
			<span>Alternative</span>
		</div>
		<picture>
			<source srcset={heroImageDesktop} media="(min-width: 960px)" />
			<img src={heroImageMobile} alt="" class="fade"/>
		</picture>
	</div>
	</IntersectionObserver>
</section>
<style>
	section {
		position: relative;
		z-index: 2;
		background: var(--bkg);
		padding: 70px 0 50px;
	}
	div {
		margin: 0 auto;
		max-width: var(--max-width);
	}
	.hero {
		--local-hero-max-width: 70%;
		max-width: var(--local-hero-max-width);
		padding-bottom: 60px;
	}
	.hero > span {
		display: block;
	}
	img {
		border-radius: var(--border-radius);
	}
	@media (max-width: 959px) {
		img {
			border-radius: 0;
		}
	}
	@media (min-width: 960px) {
		.hero {
			--local-hero-max-width: calc(100% - 50px);
		}
	}
</style>
