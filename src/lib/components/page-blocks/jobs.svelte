<script>
	import { onMount } from 'svelte';
	import Card from '$lib/components/page-blocks/cta-card.svelte';
	export let data;
	import { Navigation } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
    import 'swiper/css/navigation';
	let innerWidth;
	let ready;
	onMount(()=>{
		ready = true;
	})
</script>

<svelte:window bind:innerWidth />



<section>
	<div class="container">
		<div class="heading">
			<div class="title main-title">{data.main_title}</div>
		</div>
		<div class="heading">
			<div class="title">{data.title}</div>
			<p>{data.description}</p>
		</div>
		{#if ready === true} 
			{#if innerWidth > 721}
				<div class="grid">
					{#each data.cta_items as card}
						<Card {card} />
					{/each}
				</div>
			{:else}
				<div class="slider">
					<Swiper modules={[Navigation]} navigation autoHeight centeredSlides autoplay={ { enabled: true }} loop={ {enabled: false}} spaceBetween={50}>
						{#each data.cta_items as card}
							<SwiperSlide>
								<Card {card} />
							</SwiperSlide>
						{/each}
					</Swiper>
				</div>
			{/if}
		{/if}
	</div>
</section>

<style>
	section {
		font-family: var(--inter);
		padding: 3rem 0 8rem;
	}
	.heading {
		font-family: var(--inter);
		padding: 80px 0;
		text-align: center;
	}
	.title {
		font-size: 44px;
		font-weight: 700;
		padding-bottom: 2rem;
	}
	.main-title {
		max-width: 720px;
		margin: 0 auto;
	}
	p {
		font-size: 18px;
		line-height: 1.5;
		font-weight: 500;
		padding: 0 20px;
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		width: max-content;
		gap: 3rem;
		margin: 0 auto;
	}
	@media (min-width: 960px) {
		.grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			width: max-content;
			gap: 3rem;
			margin: 0 auto;
		}
	}
    :global(.swiper-button-prev, .swiper-rtl .swiper-button-next,.swiper-button-next, .swiper-rtl .swiper-button-prev) {
        filter: grayscale(1)
    }
</style>
