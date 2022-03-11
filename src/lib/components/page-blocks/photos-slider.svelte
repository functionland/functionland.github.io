<script>
	import { Navigation, Pagination } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
    import 'swiper/css/navigation';
    export let data;
</script>
<div class="wrapper slider">
    <Swiper modules={[Navigation]} navigation autoHeight centeredSlides autoplay={ { enabled: true }} loop={ {enabled: false}} spaceBetween={50}>
        {#each data.photos as photo}
            <SwiperSlide>
                <img
                    src={photo.srcset.small.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    style="margin: 0 auto; display: block"
                />
            </SwiperSlide>
        {/each}
    </Swiper>
</div>

<style>
    
    :global(.swiper-button-prev, .swiper-rtl .swiper-button-next,.swiper-button-next, .swiper-rtl .swiper-button-prev) {
        filter: grayscale(1)
    }
</style>