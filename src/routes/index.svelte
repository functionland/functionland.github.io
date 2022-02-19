<script context="module">
	export const prerender = true;
</script>

<script>
	import IntroFrames from '$lib/homepage/intro-frames.svelte';
	import Hero from '$lib/homepage/hero.svelte';
	import Headlines from '$lib/homepage/headlines.svelte';
	import Preorder from '$lib/homepage/preorder.svelte';
	import News from '$lib/homepage/news.svelte';
	import Partners from '$lib/homepage/partners.svelte';
	import { data as valuesData } from '$lib/components/headline/valuesData.svelte';
	import { data as featuresData } from '$lib/components/headline/featuresData.svelte';
</script>

<svelte:head>
	<title>FunctionLand</title>
</svelte:head>
<IntroFrames />
<main>
	<Hero />
	<Headlines data={valuesData} />
	<Headlines data={featuresData} title="Why <b>Box</b>?"/>
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
