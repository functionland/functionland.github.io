<script context="module">
	export const prerender = true;
</script>

<script>
	import { scrollRef } from 'svelte-scrolling';
	import Description from '$lib/components/headline/description.svelte';
	export let sections;
</script>

{#each sections as section}
	<section use:scrollRef={section.ref}>
		<Description data={section} />
	</section>
{/each}

<style>
	section {
		display: grid;
		justify-items: center;
	}
</style>
