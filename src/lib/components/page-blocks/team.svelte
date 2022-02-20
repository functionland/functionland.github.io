<script>
    import Heading from '$lib/components/page-blocks/heading.svelte';
    import Grid from '$lib/components/grid/index.svelte';
    export let data;
</script>

<section>
    <div class="container">
        <div class="heading">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
        <Grid list={data.list} type="team"/>
    </div>
</section>
<style>
    section {
        font-family: var(--inter);
        padding: 80px 0;
        text-align: center;
    }
    h1 {
        font-size: 44px;
        font-weight: 700;
        padding-bottom: 2rem;
    }
    p {
        font-size: 18px;
        line-height: 1.5;
        font-weight: 500;
        padding: 0 20px;
    }
</style>