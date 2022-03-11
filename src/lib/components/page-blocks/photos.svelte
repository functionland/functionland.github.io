<script>
	import { onMount } from 'svelte';
	import PhotosGrid from "./photos-grid.svelte";
	import PhotosSlider from "./photos-slider.svelte";
	export let data;
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
			<div class="title">{data.title}</div>
			<p>{data.description}</p>
		</div>
		{#if ready === true}
			{#if innerWidth > 721}
				<!-- <PhotosGrid {data} {innerWidth}/> -->
			{:else}
				<PhotosSlider {data} {innerWidth}/>
			{/if}
		{/if}
	</div>
</section>
<style>
	section {
		font-family: var(--inter);
		padding: 3rem 0 5rem;
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
	p {
		font-size: 18px;
		line-height: 1.5;
		font-weight: 500;
		padding: 0 20px;
	}
</style>
