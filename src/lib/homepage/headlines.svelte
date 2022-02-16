<script context="module">
	export const prerender = true;
</script>

<script>
	import { data } from '$lib/components/headline/valuesData.svelte';
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
	
	@media (min-width: 960px) {
		section {
			grid-auto-flow: column;
			align-items: start;
			max-width: var(--max-width);
			margin: 0 auto;
			gap: 30px;
		}
	}
</style>
