<script context="module">
	export const prerender = true;
	export const hydrate = true;
</script>
<script>
	import { innerWidth } from 'svelte-window-stores/viewport';
	import { data } from '$lib/components/partners/data.svelte';
	import { Pagination } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	$: perpage = $innerWidth < 960 ? 8 : 8;
	$: pages = data.length%perpage === 0 ? data.length/perpage : Math.floor(data.length/perpage) + 1;
</script>
<Swiper
    modules={[Pagination]}
    pagination={{ clickable: true }}>
	{#each Array(pages) as slide,i}
		<SwiperSlide>
			<div class="page">
				{#each data.slice(i*perpage, (i+1)*perpage) as item}
					<picture>
						<source srcset={item.dark} media="(prefers-color-scheme: dark)" />
						<img src={item.light} alt={item.title}/>
					</picture>
				{/each}
			</div>
		</SwiperSlide>
	{/each}	
</Swiper>
<style>
	.page {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
		grid-row-gap: 2rem;
		max-width: calc(100% - 70px);
		margin: 0 auto;
		grid-template-rows: repeat(4, 100px);
	}
	picture {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	img {
		display: block;
		width: auto;
		max-height: 100%;
		max-width: 120px;
		mix-blend-mode: darken;
	}
</style>