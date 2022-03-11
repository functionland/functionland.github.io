<script>
	import Item from '$lib/components/grid/item.svelte';
	export let list;
	export let type;
</script>

<div class={`wrapper ${type}`}>
	{#each list as item}
		<Item {item} {type} />
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
			grid-template-columns: repeat(3, 1fr);
			gap: 3rem;
			max-width: fit-content;
			margin: 0 auto;
		}
	}
	@media (min-width: 1300px) {
		.wrapper {
			grid-template-columns: repeat(3, 400px);
		}
	}
</style>
