<script>
	import BackIcon from '$lib/img/layout/backToTop.svelte';
	import { scrollTop } from 'svelte-scrolling';
	import { scrollY } from 'svelte-window-stores/viewport';
	import { fly } from 'svelte/transition';
	$: show = $scrollY > 450;
</script>

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
		z-index: 99;
		right: 20px;
		user-select: none;
		bottom: 20px;
		background-color: var(--go-top-bg);
	}
	@media (min-width: 960px) {
		.back-to-top {
			padding: 10px;
			border-radius: 50%;
			transition: background-color 0.3s;
		}
		.back-to-top:hover {
			cursor: pointer;
			background: var(--b-o-1);
		}
	}
</style>
