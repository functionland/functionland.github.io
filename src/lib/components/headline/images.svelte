<script context="module">
	export const prerender = true;
	export const hydrate = true;
</script>

<script>

	import Saos from "saos";
	import { scrollY } from 'svelte-window-stores/viewport';
	import { innerWidth } from 'svelte-window-stores/viewport';
	export let data;
	let photos = data.photos ? (data.photos.length > 0 ? true : false) : false;
	let scrollTop;
    let preloadTriggered = false;
	$: preload = $scrollY > scrollTop - 300 ? ()=>{preloadTriggered = true; return true} : false;
    

    const addAnimateOnHover = event => {
        if (!event.target.classList.contains('plug-n-play')) {
            event.target.classList.add('vibrate-1-2s')
        }
    }
    const removeAnimateOnHover = event => {
        event.target.classList.remove('vibrate-1-2s')
    }
</script>

<svelte:head>
	{#if preloadTriggered}
		{#each data.photos as photo}
			{#if preloadTriggered == true}
				<link rel="preload" href={photo.srcset.large.src} as="image" media="(min-width: 960px)" />
				<link rel="preload" href={photo.srcset.small.src} as="image" media="(max-width: 959px)" />
			{/if}
		{/each}
	{/if}
</svelte:head>
{#if photos}
	<div class={`photos ${data.ref}`} bind:offsetHeight={scrollTop}>
		{#each data.photos as photo, index}
        
            {#if $innerWidth < 960}
                <div class={`image-box ${data.ref}`} style={`aspect-ratio: ${photo.srcset.small.width}/${photo.srcset.small.height}; width: ${(photo.srcset.small.width / 390) * 100}%`}>
                    <img src={photo.srcset.small.src} alt="" class={`${ (index%2 == 0 && data.ref!='plug-n-play') ? "vibrate-1-3s" : "vibrate-1-6s"} ${data.ref}`} width={photo.srcset.small.width} height={photo.srcset.small.height}/>
                </div>
            {:else}
                <div class={`image-box ${data.ref}`} style={`aspect-ratio: ${photo.srcset.large.width}/${photo.srcset.large.height}; width: ${(photo.srcset.large.width / 1530) * 100}%`} on:mouseleave={removeAnimateOnHover} on:mouseenter={addAnimateOnHover}>
                    {#if data.ref=="plug-n-play"}
                        <Saos animation={"collapse-from-left 4s linear both"}>
                            <img src={photo.srcset.large.src} alt="" class={data.ref} width={photo.srcset.large.width} height={photo.srcset.large.height} loading="{preload == true ? 'eager' : 'lazy'}" decoding="async"/>
                        </Saos>
                    {:else}
                        <img src={photo.srcset.large.src} alt="" class={data.ref} width={photo.srcset.large.width} height={photo.srcset.large.height} loading="{preload == true ? 'eager' : 'lazy'}" decoding="async"/>
                    {/if}
                </div>
            {/if}
		{/each}
	</div>
{/if}
<!-- width: calc( (${photo.srcset.small.height} / ${photo.srcset.small.width}) * (100% - 60px) ); -->
<style>
    div.photos:not(.plug-n-play) {
        position: relative;
        padding-top: calc( (939 / 390) * 100%);
		width: 100%;
		/* max-width: calc(100% - 30px); */
		display: block;
    }
    div.image-box:not(.plug-n-play) {
        position: absolute;
    }
    div.image-box:not(.plug-n-play) img {
        height: 100%;
        width: 100%; 
        border-radius: 20px;
        display: block;
    }

    div.photos:not(.plug-n-play) div.image-box {
        position: absolute;
    }
    div.photos:not(.plug-n-play) div.image-box:nth-child(1) {
        position: absolute;
        top: 0;
        left: 12.9%;
        z-index: 1;
    }
    div.photos:not(.plug-n-play) div.image-box:nth-child(2) {
        position: absolute;
        top: 10.17%;
        left: 3.6%;
        z-index: 0;
    }
    div.photos:not(.plug-n-play) div.image-box:nth-child(3) {
        position: absolute;
        top: 32.69%;
        right: 6.4%;
        z-index: 0;
    }
    div.photos:not(.plug-n-play) div.image-box:nth-child(4) {
        position: absolute;
        top: 55.37%;
        left: 3.5%;
        z-index: 0;
    }
    div.photos:not(.plug-n-play) div.image-box:nth-child(5) {
        position: absolute;
        bottom: 0;
        left: 15.6%;
        z-index: 0;
    }
     img:hover {
        z-index: 2;
    }

    @media (min-width: 960px) {
        div.photos:not(.plug-n-play) {
            padding-top: calc( (1529 / 1730) * 80%);
            max-width: 90%;
            margin: 0 auto;
        }
        div.image-box:not(.plug-n-play) img {
            height: unset;
            width: 100%; 
            border-radius: 20px;
        }

        div.photos:not(.plug-n-play) div.image-box:nth-child(1) {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }
        div.photos:not(.plug-n-play) div.image-box:nth-child(2) {
            position: absolute;
            top: 17.42%;
            left: 3.6%;
            z-index: 0;
        }
        div.photos:not(.plug-n-play) div.image-box:nth-child(3) {
            position: absolute;
            top: 0;
            left: unset;
            right: 0;
            z-index: 0;
        }
        div.photos:not(.plug-n-play) div.image-box:nth-child(4) {
            position: absolute;
            top: unset;
            left: 0;
            z-index: 0;
            bottom: 2.66%;
        }
        div.photos:not(.plug-n-play) div.image-box:nth-child(5) {
            position: absolute;
            bottom: 0;
            right: 0;
            left: unset;
            top: unset;
            z-index: 0;
        }
        div.photos:not(.plug-n-play):hover div.image-box:hover {
            opacity: 1;
        }
        
        div.photos:not(.plug-n-play):hover div.image-box:not(:hover) {
            opacity: 0.9;
        }
        
		.photos.plug-n-play  {
            grid-row: 1 / -1;
			grid-column: 2 / 3;
            position: unset !important;
		}
        .image-box.plug-n-play {
            grid-row: 1 / -1;
            /* position: absolute; */

        }
    }
</style>
