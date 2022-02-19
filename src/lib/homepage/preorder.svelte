<script context="module">
	export const prerender = true;
	export const hydrate = true;
</script>

<script>
	import { innerWidth } from 'svelte-window-stores/viewport';
	import { assets } from '$app/paths';
	let src = assets + `videos/pre-order.mp4`;
	let poster = assets + `images/home/preorder-poster.jpg`;
	let browserSupportText = 'Your browser does not support the video element.';
	let ended
</script>

<section>
	<video autoplay playsinline muted poster={poster} bind:ended>
		<source {src} type="video/mp4" />
		{browserSupportText}
	</video>
	<!-- {#if ended}
	{/if} -->
	<p>Box is available now!</p>
	<div class="cta">
		<a class="btn btn-cta" sveltekit:prefetch href="/preorder">Pre-order</a>
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
		border-radius: 20px;
		overflow: hidden;
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
	p,
	div {
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
		height: 56px;
	}
	a {
		height: 56px;
		width: 206px;
	}
	@media(min-width:960px) {
		section {
			max-width: 95%;
			margin: 0 auto;
		}
	}
</style>
