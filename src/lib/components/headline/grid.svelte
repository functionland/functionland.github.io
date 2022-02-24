<script>
	import Headline from '$lib/components/headline/index.svelte';
	import { innerWidth, innerHeight } from 'svelte-window-stores/viewport';
	import { prefersColorScheme } from 'svelte-window-stores/appearance';
	export let data;
	export let title;
</script>

<section class={typeof title != 'undefined' && $innerWidth > 960 ? 'titled' : ''}>
	<div class="container">
		<div class={typeof title != 'undefined' && $innerWidth > 960 ? 'titled grid wrapper' : 'grid wrapper'}>
			{#if title && $innerWidth > 960}
				<h3>{@html title}</h3>
			{/if}
			{#each data as item, index}
				<Headline {item} titled={title != undefined ? true : false} {index} />
			{/each}
		</div>
	</div>
</section>

<style>
	section.titled {
		min-height: var(--description-min-height);
	}
	.grid {
		display: grid;
		grid-auto-flow: row;
		grid-template-columns: 1fr;
		gap: var(--headlines-grid-gap);
		align-items: center;
		justify-items: center;
		padding: var(--headlines-padding);
	}
	@media (min-width: 960px) {
		.grid {
			padding: 0;
			max-height: var(--section-min-height);
			gap: var(--headlines-grid-gap);
			grid-template-columns: 1fr 1fr 1fr;
		}
		.grid.titled {
			padding: 0;
			max-height: var(--section-min-height);
			grid-template-rows: 1fr 1fr 120px;
			gap: var(--headlines-grid-gap);
			grid-template-columns: 1fr 1fr 1fr;
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
		.grid {
		}
	}
</style>
