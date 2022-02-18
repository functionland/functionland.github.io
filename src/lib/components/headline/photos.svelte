<script context="module">
	export const prerender = true;
</script>
<script>
	import { scrollY } from 'svelte-window-stores/viewport';
    export let data;
	let photos = data.photos ? data.photos.length > 0 ? data.photos : false : false;
    let scrollTop
    $: preload = ($scrollY > (scrollTop - 300)) ? true : false;
</script>
<svelte:head>
    {#if photos}
        {#each photos as photo}
            {#if preload == true} 
                <link rel="preload" href="{photo.srcset.large}" as="image" media="(min-width: 960px)"/>
                <link rel="preload" href="{photo.srcset.small}" as="image" media="(max-width: 959px)"/>
            {/if}
        {/each}
    {/if}
</svelte:head>
{#if photos}
	<div class="{data.ref}" bind:offsetHeight={scrollTop}>
		{#each photos as photo}
            <picture>
                <source srcset={photo.srcset.large} media="(min-width: 960px)">
                <img src={photo.srcset.small} alt="">
            </picture>
		{/each}
	</div>
{/if}
<style>
    .apps-without-ads {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .apps-without-ads img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: opacity 0.5s ease;
    }
    .apps-without-ads img:hover {
        opacity: 0.5;
    }
</style>