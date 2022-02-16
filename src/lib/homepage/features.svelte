<script context="module">
	export const prerender = true;
	export const hydrate = true;
</script>

<script>
	import { data } from '$lib/components/headline/featuresData.svelte';
	import HeadlinesGrid from '$lib/components/headline/grid.svelte';
	import HeadlineSections from '$lib/components/headline/sections.svelte';
</script>

<section>
	<HeadlinesGrid items={data.headlines} />
</section>
<HeadlineSections sections={data.sections} />

<style>
	section {
		display: grid;
		grid-auto-flow: row;
		row-gap: var(--headlines-grid-gap);
		align-items: center;
		justify-items: center;
		padding: var(--headlines-padding);
	}
</style>
