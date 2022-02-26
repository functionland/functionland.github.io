<script>
	import FadeIn from '$lib/components/FadeIn.svelte';
	import { scrollto } from 'svelte-scrollto';
	import { innerWidth } from 'svelte-window-stores/viewport';
	import { inview } from 'svelte-inview';
	export let item;
	export let titled;
	export let index;
	const observer = {
		inview: false,
		options: {
			threshold: $innerWidth < 960 ? 0.2 : 0.3,
			unobserveOnEnter: false
		},
		scrollDirection: '',
		change:({ detail }) => {
			observer.inview = detail.inView;
			observer.scrollDirection = detail.scrollDirection.vertical;
		},
	}
</script>

<div class={`wrapper ${titled ? 'titled' : ''}`} use:inview={observer.options} on:change={observer.change}>
	<FadeIn inview={observer} delay={(index+1) * .3} fh={true}>
		<div
			class={`item ${titled ? 'titled' : ''}`}>
			<h2>{item.intro_title}</h2>
			<p>{@html item.intro_desc}</p>
			<!-- <button use:scrollTo={item.ref} class="btn btn-cta">{item.cta_text}</button> -->
			{#if item.show_cta == true}
				<button use:scrollto={`#${item.ref}`} class="btn btn-cta">{item.cta_text}</button>
			{/if}
			<div class="dark-bg"></div>
		</div>
	</FadeIn>
</div>

<style>
	h2 {
		font-size: var(--headline-title-font-size);
		line-height: var(--headline-title-line-height);
		font-weight: var(--headline-title-font-weight);
		letter-spacing: var(--headline-letter-spacing);
		padding-bottom: var(--headline-title-padding-bottom);
	}
	p {
		font-size: var(--headline-content-font-size);
		line-height: var(--headline-content-line-height);
		font-weight: var(--headline-content-font-weight);
		padding-bottom: var(--headline-content-padding-bottom);
	}
	.wrapper {
		height: 100%;
		align-self: start;
	}
	.animate,
	.animateFromTop,
	.animateFromBottom,
	.animateToBottom,
	.animateToTop {
		opacity: 0;
		animation-name: none;
	}
	.animate.animateFromTop {
		-webkit-animation: fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
		animation: fade-in-bottom 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
		animation-delay: 0.6s;
	}
	.animateToTop.animateFromTop:not(.animate),
	.animate.animateFromBottom:not(.animateFromTop) {
		opacity: 1;
		animation-name: none;
	}
	@media (min-width: 960px) {
		.wrapper.titled {
			grid-row: 2;
		}
		button {
			align-self: end;
		}
		.item {
			height: 100%;
			display: grid;
			grid-auto-flow: column;
			grid-template-rows: auto 1fr auto;
			width: 100%;
			grid-template-columns: 1fr;
			max-width: unset;
		}
	}
	@media (max-width: 960px) {
		.item {
			padding: 0 15px;
		}
	}
	@media (prefers-color-scheme: dark) {
		.item {
			padding-top: 1rem;
			padding-bottom: 1rem;
			position: relative;
			border-radius: 20px;
		}
		.dark-bg {
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border-radius: 20px;
			z-index: -1;
			background: var(--b-o-5);
			/* mix-blend-mode: overlay; */
		}
	}
	@media (prefers-color-scheme: dark) and (min-width: 960px){
		.item {
			padding: 1rem;
		}
	}
</style>
