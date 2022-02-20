<script>
	import Headline from '$lib/components/headline/index.svelte';
	import { innerWidth } from 'svelte-window-stores/viewport';
	export let data;
	export let title;
</script>

<section>
	<div class="container">
		<div class={(typeof title != "undefined" && $innerWidth > 960 ) ? "titled grid" : "grid"}>
			{#if (title && $innerWidth > 960)} 
				<h3>{@html title}</h3>
			{/if}
			{#each data as item}
				<div class='item'>
					<Headline {item} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-auto-flow: row;
		row-gap: var(--headlines-grid-gap);
		align-items: center;
		justify-items: center;
		padding: var(--headlines-padding);
	}
	.grid.titled {
		padding: 0;
		max-height: var(--section-min-height);
		grid-template-rows: minmax(500px,1fr) auto 1fr ;
	}
	.grid.titled h3 {
		grid-row: 1 / 2;
		grid-column: 1 / 5;
		align-self: center;
		justify-self: center;
		font-size: 80px;
		padding: 120px 0;
	}
	:global(.grid.titled h3 b) {
		font-weight: bold;
	}
	.grid.titled .item {
		grid-row: 2;
	}
	.item {
		/* max-width: calc(100% - 60px); */
	}
	@media (min-width: 960px) {
		.grid {
			grid-auto-flow: column;
			align-items: start;
			/* width: 87%; */
			/* max-width: 1530px; */
			margin: 0 auto;
			gap: 1rem;
		}
		.item {
			height: 100%;
			display: grid;
			grid-auto-flow: column;
			grid-template-rows: auto 1fr auto;
			width: 100%;
			grid-template-columns: 1fr;
			max-width: unset;
		}
	}
	@media (max-width: 960px) {
		.item {
			padding: 0 15px;
		}
	}
</style>
