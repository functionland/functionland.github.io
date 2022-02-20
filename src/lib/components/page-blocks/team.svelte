<script>
    import Heading from '$lib/components/page-blocks/heading.svelte';
    import Grid from '$lib/components/grid/index.svelte';
    export let data;
</script>
<section>
    <Heading title={data.title} description={data.description}/>
    <Grid list={data.list}/>
</section>
