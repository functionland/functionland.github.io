<script>
	import BackIcon from '$lib/img/layout/backToTop.svelte';
	import { scrollTop } from 'svelte-scrolling';
	import { fly } from 'svelte/transition';
	let scrollY;
	$: show = scrollY > 450;
</script>

<svelte:window bind:scrollY />
{#if show}
	<div transition:fly={{ y: 200, duration: 400 }} class="back-to-top" on:click={() => scrollTop()}>
		<BackIcon width="28px" height="32px" fill="var(--go-top-fill)" />
	</div>
{/if}

<style>
	.back-to-top {
		--go-top-bg: var(--gray-3);
		--go-top-fill: var(--gray-1);
		opacity: 1;
		transition: opacity 0.5s, visibility 0.5s;
		position: fixed;
		z-index: 9;
		right: 20px;
		user-select: none;
		bottom: 20px;
		background-color: var(--go-top-bg);
		border-radius: 50%;
		padding: 10px;
	}
	@media (min-width: 960px) {
		.back-to-top {
			transition: background-color 0.3s;
		}
		.back-to-top:hover {
			cursor: pointer;
			background: var(--b-o-1);
		}
	}
</style>
