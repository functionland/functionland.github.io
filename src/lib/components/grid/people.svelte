<script>
	import Item from '$lib/components/grid/item.svelte';
	export let list;
	export let type;
</script>

<div class={`wrapper ${type}`}>
	{#each list as item, index}
		<Item {item} type="advisor" {index} />
	{/each}
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-flow: row;
		grid-gap: 2rem;
	}
	@media (min-width: 960px) {
		.wrapper {
			grid-template-columns: 30.07518796992481% 30.07518796992481% 30.07518796992481%;
			grid-template-rows: 28.62068965517241% 17.35632183908046% 20.57471264367816% 25.40229885057471%;
			margin: 0 auto;
			grid-auto-flow: column;
			justify-items: center;
			justify-content: center;
			width: 100%;
			max-width: 1340px;
		}
	}
</style>
