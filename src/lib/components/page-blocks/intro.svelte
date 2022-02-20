<script>
    export let title;
    export let description;
</script>
<section>
    <div class="container">
        <div class="grid">
            <div class="title">{title}</div>
            <div class="description">{description}</div>
        </div>
    </div>
</section>
<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-auto-flow: row;
        padding: 2rem;
        height: 100%;
        width: 100%;
        background: #f6f6f6;
    }
    .title {
        font-size: 30px;
        font-weight: 600;
        border-bottom: 4px solid #E2E2E2;
    }
    .description {
        color: #00000080;
        font-size: 18px;
        font-weight: 400;
    }
    @media (min-width: 960px) {
        .grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-auto-flow: row;
            padding: 4rem;
        }
        .title {
            border-bottom: unset;
            border-right: 4px solid #f6f6f6;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            align-items: center;
            align-content: center;
            justify-content: start;
        }
    }
</style>