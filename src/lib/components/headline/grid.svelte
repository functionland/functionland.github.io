<script context="module">
	export const prerender = true;
</script>

<script>
	import Headline from '$lib/components/headline/index.svelte';

	export let items;
</script>

{#each items as headline}
	<div>
		<Headline data={headline} />
	</div>
{/each}

<style>
	div {
		max-width: calc(100% - 60px);
	}
	@media (min-width: 960px) {
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
