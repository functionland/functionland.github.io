<script>
	import { Navigation, EffectCards } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import BlogItem from '$lib/components/blog/item.svelte';
	import Blog_placeholder from '$lib/components/blog/placeholder.svelte';
    export let blogData;
    import 'swiper/css/navigation';
    import 'swiper/css/effect-cards';
</script>

{#if blogData.ready == true}
    <Swiper modules={[Navigation,EffectCards]} effect={'cards'} navigation loop={ {enabled: false}} spaceBetween={50}>
        {#if blogData.items != undefined}
            {#each blogData.items as post, index}
		        <SwiperSlide>
                    <BlogItem {post} />
                </SwiperSlide>
            {/each}
        {/if}
    </Swiper>
{:else if blogData.error != undefined}
    {#if blogData.error != undefined}
        <div>error: {blogData.error}</div>
    {/if}
{:else}
    <Blog_placeholder />
{/if}

<style>
    :global(.swiper-button-prev, .swiper-rtl .swiper-button-next,.swiper-button-next, .swiper-rtl .swiper-button-prev) {
        filter: grayscale(1)
    }
</style>
