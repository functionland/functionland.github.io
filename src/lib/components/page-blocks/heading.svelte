<script>
    export let title;
    export let description;
</script>
<section>
    <div class="container">
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
</section>
<style>
    section {
        font-family: var(--inter);
        padding: 0 80px;
        text-align: center;
    }
    h1 {
        font-size: 44px;
        font-weight: 700;
    }
    p {
        font-size: 18px;
        line-height: 1.5;
        font-weight: 500;
    }
</style>