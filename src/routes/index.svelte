<script context="module">
	export const prerender = true;
</script>

<script>
	import Intro from '$lib/homepage/intro.svelte';
	import Hero from '$lib/homepage/hero.svelte';
</script>

<svelte:head>
	<title>FunctionLand</title>
</svelte:head>
<Intro />
<Hero />
