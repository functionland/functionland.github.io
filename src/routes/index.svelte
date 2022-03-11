<script context="module">
	export const prerender = true;
</script>

<script>
	import { data as valuesData } from '$lib/components/data-mocks/values.svelte';
	import { data as featuresData } from '$lib/components/data-mocks/features.svelte';
	import Parallax from '$lib/homepage/intro-parallax.svelte';
	// import Frames from '$lib/homepage/intro-frames.svelte';
	import Hero from '$lib/homepage/hero.svelte';
	import Headlines from '$lib/homepage/headlines.svelte';
	import Preorder from '$lib/homepage/preorder.svelte';
	import News from '$lib/homepage/news.svelte';
	import Partners from '$lib/homepage/partners.svelte';
	import MouseMove from '$lib/homepage/mouseMove.svelte';
	import LazyLoadVideos from '$lib/homepage/lazyloadVideos.svelte';
	import { data as meetBoxData } from '$lib/components/data-mocks/meetBox.svelte';
</script>

<svelte:head>
	<title>FunctionLand</title>
</svelte:head>
<main>
	<!-- <Frames /> -->
	<Parallax />
	<Hero />
	<Headlines data={valuesData} presection={meetBoxData}/>
	<Headlines data={featuresData} title="Pros in a nutshell" />
	<Preorder />
	<News />
	<Partners />
	<MouseMove />
	<LazyLoadVideos />
</main>

<style>
</style>
