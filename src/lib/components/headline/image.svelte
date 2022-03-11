<script>
    import AnimatedImage from '$lib/components/headline/animatedImage.svelte';
    import PlugnplayImage from '$lib/components/headline/plugnplayImage.svelte';
	import { innerWidth } from 'svelte-window-stores/viewport';
    export let data
</script>
{#if data.ref == 'plug-n-play'}
    {#if $innerWidth < 960}
        <PlugnplayImage image={ { ref:data.ref, photo:data.photo, size: 'small', parent: data.parent} } />
    {:else}
        <PlugnplayImage image={ { ref:data.ref, photo:data.photo, size: 'large', parent: data.parent} } />
    {/if}
{:else}
    {#if $innerWidth < 960}
        {#if data.position <= 4}
            <AnimatedImage image={ { ref:data.ref, photo:data.photo, position:data.position, size: 'small', parent: data.parent} } />
        {/if}
    {:else}
        <AnimatedImage image={ { ref:data.ref, photo:data.photo, position:data.position, size: 'large', parent: data.parent} } />
    {/if}
{/if}