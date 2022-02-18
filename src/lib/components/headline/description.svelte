<script context="module">
	export const prerender = true;
</script>

<script>
	import { scrollRef } from 'svelte-scrolling';
	import Videos from '$lib/components/headline/videos.svelte';
	import Photos from '$lib/components/headline/photos.svelte';
	export let data;
</script>

{#each data as item}
	<section use:scrollRef={item.ref} class="{item.ref}">
		<h3>{item.main_title}</h3>
		<p>{item.main_desc}</p>
		<Videos data={item} />
		<Photos data={item} />
	</section>
{/each}

<style>
	section {
		padding: 0;
		display: grid;
		overflow: hidden;
		position: relative;
		justify-items: center;
		grid-template-rows: auto auto 1fr;
		grid-row-gap: var(--description-row-gap);
		min-height: var(--description-min-height);
	}
	section.apps-without-ads,
	section.design {
		padding-bottom: 119px;
	}
	section.earn-crypto {
		color: white;
		grid-row-gap: 20px;
	}
	section.earn-crypto:before {
		content: "";
		background: linear-gradient(180deg, #4C4D51 60.48%, rgba(79, 80, 85, 0) 92.22%);
		top: 0;
		left: 0;
		width: 100%;
		height: 333px;
		position: absolute;
		z-index: 1;
	}
	h3 {
		z-index: 1;
		margin: 0 auto;
		text-align: center;
		position: relative;
		max-width: var(--description-max-width);
		padding: var(--description-title-padding);
		font-size: var(--description-title-font-size);
		line-height: var(--description-title-line-height);
		font-weight: var(--description-title-font-weight);
	}
	section.earn-crypto h3 {
		color: white;
		grid-row-gap: 20px;
		padding-bottom: 0;
	}
	p {
		z-index: 1;
		margin: 0 auto;
		position: relative;
		max-width: var(--description-max-width);
		font-size: var(--description-desc-font-size);
		line-height: var(--description-desc-line-height);
	}
	section.apps-without-ads p {
		text-align: center;
		max-width: calc(100% - 80px);
	}
	section.earn-crypto p {
		max-width: calc(100% - 100px);
	}
</style>
