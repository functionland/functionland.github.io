<script>
	import DescSection from '$lib/components/headline/descSection.svelte';
	export let data;
</script>
{#each data as item}
	<DescSection data={item} />
{/each}