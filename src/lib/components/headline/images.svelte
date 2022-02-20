<script context="module">
	export const prerender = true;
	export const hydrate = true;
</script>

<script>
	import { scrollY } from 'svelte-window-stores/viewport';
	import { innerWidth } from 'svelte-window-stores/viewport';
    import { inview } from 'svelte-inview';
import { onMount } from 'svelte';

    let isInView;
    let scrollDirection;
    const options = {
        unobserveOnEnter: false,
    };
    const handleChange = ({ detail }) => {
        isInView = detail.inView;
        scrollDirection = detail.scrollDirection.vertical;
    };

	export let data;
	let photos = data.photos ? (data.photos.length > 0 ? true : false) : false;
	let scrollTop;
    let preloadTriggered = false;
	$: preload = $scrollY > scrollTop - 50 ? ()=>{preloadTriggered = true; return true} : false;
    

    const addAnimateOnHover = event => {
        if (!event.target.classList.contains('plug-n-play')) {
            event.target.classList.add('vibrate-1-2s')
        }
    }
    const removeAnimateOnHover = event => {
        event.target.classList.remove('vibrate-1-2s')
    }
    const enlarge = (event) => {
        if (event.target.classList.contains('apps-without-ads')) {
            event.target.classList.add('enlarge')
        }
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
	<div class={`photos de-contain ${data.ref}`} bind:offsetHeight={scrollTop}  use:inview={options} on:change={handleChange}>
		{#each data.photos as photo, index}
            {#if $innerWidth < 960}
                {#if index <= 4}
                <div class={`image-box ${data.ref}`} style={`aspect-ratio: ${photo.srcset.small.width}/${photo.srcset.small.height}; width: ${(photo.srcset.small.width / 390) * 100}%`}>
                    {#if isInView}
                        <img src={photo.srcset.small.src} alt="" class={`${ (index%2 == 0 && data.ref!='plug-n-play') ? "vibrate-1-3s" : "vibrate-1-6s"} ${data.ref}`} width={photo.srcset.small.width} height={photo.srcset.small.height}/>
                    {:else}
                        <div class="{`placeholder ${data.ref}`}" width={photo.srcset.small.width} height={photo.srcset.small.height}></div>
                    {/if}
                </div>
                {/if}
            {:else}
                {#if data.ref=="plug-n-play"}
                    {#if index <= 4}
                    <div class={`image-box ${data.ref}`}
                        class:animate={isInView}
                        class:animateFromBottom={scrollDirection === 'down'}
                        class:animateFromTop={scrollDirection !== 'down'}>
                        <img src={photo.srcset.large.src} alt="" class={data.ref} width={photo.srcset.large.width} height={photo.srcset.large.height} loading="{preload == true ? 'eager' : 'lazy'}" decoding="async"/>
                    </div>
                    {/if}
                {:else}
                    <div class={`image-box ${data.ref}`} style={`aspect-ratio: ${photo.srcset.large.width}/${photo.srcset.large.height}; width: ${(photo.srcset.large.width / 1530) * 100}%`} on:mouseleave={removeAnimateOnHover} on:mouseenter={addAnimateOnHover} on:click={enlarge}>
                        {#if isInView}
                            <img src={photo.srcset.large.src} alt="" class={data.ref} width={photo.srcset.large.width} height={photo.srcset.large.height} loading="{preload == true ? 'eager' : 'lazy'}" decoding="async"/>
                        {:else}
                            <div class="{`placeholder ${data.ref}`}" width={photo.srcset.large.width} height={photo.srcset.large.height}></div>
                        {/if}
                    </div>
                {/if}
            {/if}
		{/each}
	</div>
{/if}
<style>
    div.photos:not(.plug-n-play) {
        position: relative;
        aspect-ratio: 390/939;
		width: 100%;
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
        div.photos:not(.plug-n-play):not(.design) {
            /* padding-top: calc( (1529 / 1730) * 80%); */
            aspect-ratio: 1529/1198.99;
            max-width: 90%;
            margin: 0 auto;
        }
        div.photos.design {
            aspect-ratio: 1188/1058;
        }
        div.photos.design div.image-box,
        div.photos.design div.image-box:nth-child(1),
        div.photos.design div.image-box:nth-child(2),
        div.photos.design div.image-box:nth-child(3),
        div.photos.design div.image-box:nth-child(4),
        div.photos.design div.image-box:nth-child(5),
        div.photos.design div.image-box img {
            position: unset;
            top: unset;
            left: unset;
            right: unset;
            bottom: unset;
        }
        div.image-box:not(.plug-n-play):not(.design) img {
            height: unset;
            width: 100%; 
            border-radius: 20px;
        }

        div.photos:not(.plug-n-play):not(.design) div.image-box:nth-child(1) {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
        }
        div.photos:not(.plug-n-play):not(.design) div.image-box:nth-child(2) {
            position: absolute;
            top: 17.42%;
            left: 3.6%;
            z-index: 0;
        }
        div.photos:not(.plug-n-play):not(.design) div.image-box:nth-child(3) {
            position: absolute;
            top: 0;
            left: unset;
            right: 0;
            z-index: 0;
        }
        div.photos:not(.plug-n-play):not(.design) div.image-box:nth-child(4) {
            position: absolute;
            top: unset;
            left: 0;
            z-index: 0;
            bottom: 2.66%;
        }
        div.photos:not(.plug-n-play):not(.design) div.image-box:nth-child(5) {
            position: absolute;
            bottom: 0;
            right: 0;
            left: unset;
            top: unset;
            z-index: 0;
        }
        div.photos:not(.plug-n-play):not(.design):hover div.image-box:hover {
            opacity: 1;
        }
        
        div.photos:not(.plug-n-play):not(.design):hover div.image-box:not(:hover) {
            opacity: 0.9;
        }
        
		.photos.plug-n-play  {
            grid-row: 1 / -1;
			grid-column: 2 / 3;
            position: unset !important;
		}
        .image-box.plug-n-play {
			position: absolute;
			right: 0;
			z-index: 1;
			top: 0;
			transform-origin: center;
			height: 100%;
            width: 100%;
            overflow: hidden;
        }
        .image-box.plug-n-play.animateFromTop {
            -webkit-animation: expand-to-left 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: expand-to-left 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.2s;

        }
        .image-box.plug-n-play.animateFromBottom {
            -webkit-animation: expand-to-left 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: expand-to-left 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.2s;
        }
        .image-box.plug-n-play.animate {
            -webkit-animation: collapse-from-left 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: collapse-from-left 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.2s;
        }
        .image-box.plug-n-play img{
            width: auto;
            max-width: unset;
            height: 100%;
            max-width: unset;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }
</style>
