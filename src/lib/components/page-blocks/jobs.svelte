<script>
    import Card from '$lib/components/page-blocks/cta-card.svelte';
    export let data;
</script>

<section>
    <div class="container">
        <div class="heading">
            <div class="title main-title">{data.main_title}</div>
        </div>
        <div class="heading">
            <div class="title">{data.title}</div>
            <p>{data.description}</p>
        </div>
        <div class="grid">
            {#each data.cta_items as card}
                <Card {card} />
            {/each}
        </div>
    </div>
</section>
<style>
    section {
        font-family: var(--inter);
        padding: 3rem 0 8rem;
    }
    .heading {
        font-family: var(--inter);
        padding: 80px 0;
        text-align: center;
    }
    .title {
        font-size: 44px;
        font-weight: 700;
        padding-bottom: 2rem;
    }
    .main-title {
        max-width: 720px;
        margin: 0 auto;
    }
    p {
        font-size: 18px;
        line-height: 1.5;
        font-weight: 500;
        padding: 0 20px;
    }
    @media (min-width: 960px) {
        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            width: max-content;
            gap: 3rem;
            margin: 0 auto;
        }
    }
</style>