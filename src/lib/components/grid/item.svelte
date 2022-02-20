<script>
    import { inview } from 'svelte-inview';

    let isInView;
    let scrollDirection;
    const options = {
        unobserveOnEnter: false,
    };
    const handleChange = ({ detail }) => {
        isInView = detail.inView;
        scrollDirection = detail.scrollDirection.vertical;
    };
    export let type;
    export let item;
    export let index;
</script>
<div class={`item ${type} item-${index}`} use:inview={options} on:change={handleChange} >
    <div class="image-wrapper">
        {#if isInView}
            <img src={item.image} alt="" width="400" height="400"/>
            <img src={item.artwork} alt="" class="artwork" width="400" height="400" />
        {/if}
    </div>
    <div class="info-wrapper">
        <div class="info">
            <div class="name">{item.name}</div>
            <div class="title">{item.position}</div>
        </div>
    </div>
</div>
<style>
    .item {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-flow: row;
        grid-template-rows: 72.25% auto;
        aspect-ratio: 1/1;
        width: 100%;
        border-radius: 20px;
        overflow: hidden;
    }
    .info-wrapper {
        background: #F1F1F3;
    }
    .title {
        font-size: 1rem;
        font-weight: 500;
    }
    .name {
        font-size: 1.5rem;
        font-weight: 500;
    }
    .image-wrapper {
        background: #F1F1F3;
        position: relative;
        overflow: hidden;
    }
    img {
        width: 100%;
        height: auto;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    @media (min-width: 960px) {
        .item-0 {
            grid-column: 1/-1;
            grid-row: 2/3;
        }
        .item-1 {
            grid-column: 2/3;
            grid-row: 1/2;
        }
        .item-2 {
            grid-column: 2/3;
            grid-row: 3/4;
        }
        .item-0 {
            grid-column: 3/4;
            grid-row: 2/3;
        }
    }
</style>