<script context="module">
	export const prerender = true;
	export const hydrate = true;
</script>

<script>
	import { scrollRef } from 'svelte-scrolling';

	import { assets } from '$app/paths';
	import IntersectionObserver from 'svelte-intersection-observer';
	const heroImageDesktop = assets + 'images/home/hero-image-desktop.png';
	const heroImageMobile = assets + 'images/home/hero-image-mobile.jpg';
</script>

<section use:scrollRef={'hero'} id="herosection">
	<div>
		<h1 class="hero">
			<span>
				<span class="bold">Box </span> by <span class="teal-text">Functionland </span>
			</span>
			<span>The Private, </span>
			<span>Payless, </span>
			<span>Cloud Storage </span>
			<span>Alternative</span>
		</h1>
		<picture>
			<source srcset={heroImageDesktop} media="(min-width: 960px)" />
			<img src={heroImageMobile} alt="" />
		</picture>
	</div>
</section>

<style>
	section {
		position: relative;
		z-index: 2;
		background: var(--hero-section-background);
		padding: var(--hero-section-padding);
	}
	div {
		margin: 0 auto;
		max-width: var(--max-width);
	}
	h1 {
		font-family: var(--montserrat);
		font-size: var(--hero-font-size);
		font-weight: var(--hero-font-weight);
		line-height: var(--hero-line-height);
		letter-spacing: var(--letter-spacing);
		margin: 0 auto;
		max-width: var(--hero-max-width);
		padding-bottom: var(--hero-padding-bottom);
	}
	h1 > span {
		display: block;
	}
	img {
		width: 100%;
		display: block;
		border-radius: var(--hero-image-brdrds);
	}
	@media (min-width: 960px) {
		section {
			width: 90%;
			max-width: 1680px;
			margin: 0 auto;
		}
		h1 {
			text-align: var(--hero-text-align);
		}
		h1 > span {
			display: inline-block;
		}
		h1 > span:nth-child(1) {
			display: block;
		}
		img {
			margin: 0 auto;
			display: block;
			border-radius: var(--hero-image-brdrds);
		}
	}
	@media(min-width: 1920px) {
		section {
		}
	}
</style>
