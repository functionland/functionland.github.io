<script context="module">
	export const prerender = true;
</script>

<script>
	import Frames from '$lib/homepage/frames.svelte';
	import Hero from '$lib/homepage/hero.svelte';
	import Headlines from '$lib/homepage/headlines.svelte';
	import Preorder from '$lib/homepage/preorder.svelte';
	import News from '$lib/homepage/news.svelte';
	import Partners from '$lib/homepage/partners.svelte';
	import { data as valuesData } from '$lib/components/data-mocks/values.svelte';
	import { data as featuresData } from '$lib/components/data-mocks/features.svelte';
	import MouseMove from '$lib/homepage/mouseMove.svelte';
</script>

<svelte:head>
	<title>FunctionLand</title>
</svelte:head>
<main>
	<Frames />
	<Hero />
	<Headlines data={valuesData} />
	<Headlines data={featuresData} title="Why <b>Box</b>?" />
	<Preorder />
	<News />
	<Partners />
	<MouseMove />
</main>

<style>
</style>
