<script context="module">
	export const prerender = true;
</script>

<script>
	import Headline from '$lib/components/headline/index.svelte';
	export let data;
</script>
<section>
	{#each data as item}
		<div>
			<Headline item={item} />
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
	div {
		max-width: calc(100% - 60px);
	}
	@media (min-width: 960px) {
		section {
			grid-auto-flow: column;
			align-items: start;
			max-width: var(--max-width);
			margin: 0 auto;
			gap: 30px;
		}
		div {
			height: 100%;
			display: grid;
			grid-auto-flow: column;
			grid-template-rows: auto 1fr auto;
			width: 100%;
			grid-template-columns: 1fr;
		}
	}
</style>
