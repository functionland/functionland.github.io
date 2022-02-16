<script context="module">
	export const prerender = true;
</script>

<script>
	// import Intro from '$lib/homepage/intro.svelte';
	import IntroFrames from '$lib/homepage/intro-frames.svelte';
	import Hero from '$lib/homepage/hero.svelte';
	import Values from '$lib/homepage/headlines.svelte';
	import Features from '$lib/homepage/features.svelte';
	import Preorder from '$lib/homepage/preorder.svelte';
	import News from '$lib/homepage/news.svelte';
	import Partners from '$lib/homepage/partners.svelte';
</script>

<svelte:head>
	<title>FunctionLand</title>
</svelte:head>
<IntroFrames />
<main>
	<Hero />
	<Values />
	<Features />
	<Preorder />
	<News />
	<Partners />
</main>

<style>
	main {
		margin-top: 100vh;
		position: relative;
		z-index: 2;
		background: var(--bkg);
	}
</style>
