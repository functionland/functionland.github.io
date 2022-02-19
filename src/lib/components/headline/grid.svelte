<script context="module">
	export const prerender = true;
	export const hydrate = true;
</script>

<script>
	import Headline from '$lib/components/headline/index.svelte';
	import { innerWidth } from 'svelte-window-stores/viewport';
	export let data;
	export let title;
</script>

<section class={(typeof title != "undefined" && $innerWidth > 960 ) ? "titled" : ""}>
	{#if (title && $innerWidth > 960)} 
		<h3>{@html title}</h3>
	{/if}
	{#each data as item}
		<div>
			<Headline {item} />
		</div>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-auto-flow: row;
		row-gap: var(--headlines-grid-gap);
		align-items: center;
		justify-items: center;
		padding: var(--headlines-padding);
	}
	section.titled {
		padding: 0;
		max-height: var(--section-min-height);
		grid-template-rows: minmax(500px,1fr) auto 1fr ;
	}
	section.titled h3 {
		grid-row: 1 / 2;
		grid-column: 1 / 5;
		align-self: center;
		justify-self: center;
		font-size: 80px;
		padding: 120px 0;
	}
	:global(section.titled h3 b) {
		font-weight: bold;
		
	}
	section.titled div {
		grid-row: 2;
	}
	div {
		max-width: calc(100% - 60px);
	}
	@media (min-width: 960px) {
		section {
			grid-auto-flow: column;
			align-items: start;
			width: 87%;
			max-width: 1530px;
			margin: 0 auto;
			gap: 1rem;
		}
		div {
			height: 100%;
			display: grid;
			grid-auto-flow: column;
			grid-template-rows: auto 1fr auto;
			width: 100%;
			grid-template-columns: 1fr;
			max-width: unset;
		}
	}
	@media (min-width: 1900px) {
	}
</style>
