<script context="module">
	export const prerender = true;
	export const hydrate = true;
</script>
<script>
	import { innerWidth } from 'svelte-window-stores/viewport';
	import { assets } from '$app/paths';
	import { onMount } from 'svelte';
	let src = assets + `videos/pre-order.mp4`;
    let browserSupportText = "Your browser does not support the video element.";
	$: onMount(() => {
		// const passiveSupported = () => {
		// 	let supported = false;
		// 	try {
		// 		let options = Object.defineProperty({}, 'passive', {
		// 			get: () => {
		// 				supported = true;
		// 			}
		// 		});
		// 		window.addEventListener('test', null, options);
		// 	} catch (err) {
		// 		supported = false;
		// 	}
		// 	return supported;
		// };
		// window.addEventListener(
		// 	'touchmove',
		// 	(event) => {
		// 		ontouchmoveEvent(event);
		// 	},
		// 	passiveSupported ? { passive: false } : false
		// );
	});
	// import Blog from '$lib/components/blog/index.svelte';
</script>
<section>
	{#if $innerWidth >= 960} 
		<video playsinline muted>
			<source src={src} type="video/mp4" />
			{browserSupportText}
		</video>
	{:else}
		<video autoplay playsinline muted>
			<source src={src} type="video/mp4" />
			{browserSupportText}
		</video>
	{/if}
	<p>Box is available now!</p>
	<div class="cta">
		<a class="btn btn-cta" sveltekit:prefetch href="/preorder">Pre-order</a
		>
	</div>
</section>

<style>
	section {
		position: relative;
		height: var(--section-min-height);
		color: white;
		display: grid;
		justify-content: center;
		align-content: end;
		width: 100%;
		grid-template-columns: 1fr;
		padding-bottom: 121px;
	}
	video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 0;
	}
	p, div {
		height: 80px;
		display: grid;
		position: relative;
		z-index: 1;
		width: 100%;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		font-weight: 400;
		line-height: 30px;
	}
	div {
		height: auto;
	}
</style>