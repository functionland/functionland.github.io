<script>
    import Item from '$lib/components/grid/item.svelte';
    export let list;
</script>
<div>
    {#each list as item}
        <Item {item} />
    {/each}
</div>
<style>
    div {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-flow: row;
        grid-gap: 1rem;
    }
    @media (min-width: 960px) {
        div {
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
        }
    }
</style>

