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
		{#each photos as photo, index}
            <picture class={`${data.ref} ${data.ref}-${index+1}`}>
                <source srcset={photo.srcset.large} media="(min-width: 960px)">
                <img src={photo.srcset.small} alt="">
            </picture>
		{/each}
	</div>
{/if}
<style>
    div.apps-without-ads,
    div.design {
        max-width: calc(100% - 30px);
        position: relative;
        display: block;
        border-radius: 22px;
        overflow: hidden;
    }
    div.apps-without-ads img,
    div.design img {
        transition: opacity 0.5s ease;
        display: block;
        border-radius: 22px;
        overflow: hidden;
    }
    div.apps-without-ads img:hover,
    div.design img:hover {
        opacity: 0.5;
    }
    div.apps-without-ads picture.apps-without-ads,
    div.design picture.design {
        display: block;
        position: relative;
    }
    div.apps-without-ads picture.apps-without-ads-1,
    div.design picture.design-1 {
        margin-bottom: -25%;
        z-index: 1;
        left: 12.5%;
    }
    div.apps-without-ads picture.apps-without-ads-3,
    div.design picture.design-3 {
        z-index: 1;
        margin-top: -17.5%;
        margin-bottom: -25%;
        left: 57.5%;
    }
    div.apps-without-ads picture.apps-without-ads-5,
    div.design picture.design-5 {
        z-index: 1;
        margin-top: -17.5%;
        left: 12.5%;
    }

    div.plug-n-play {
        display: grid;
        height: 100%;
        align-items: center;
    }


</style>