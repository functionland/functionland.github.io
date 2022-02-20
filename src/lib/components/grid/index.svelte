<script>
    import Item from '$lib/components/grid/item.svelte';
    export let list;
    export let type
</script>
<div class={type}>
    {#each list as item}
        <Item {item} {type}/>
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

