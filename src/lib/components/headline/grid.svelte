<script>
	import Headline from '$lib/components/headline/index.svelte';
	import FadeIn from '$lib/components/FadeIn.svelte';
	import { innerWidth,  } from 'svelte-window-stores/viewport';
	import { inview } from 'svelte-inview';
	const section = {
		inview: false,
		options: {
			threshold: 0.01,
			unobserveOnEnter: false
		},
		scrollDirection: '',
		change:({ detail }) => {
			section.inview = detail.inView;
			section.scrollDirection = detail.scrollDirection.vertical;
		},
	}
	export let data;
	export let title;
	export let presection;
	let sectionClass, wrapperClass = 'grid wrapper';
	if (typeof title != 'undefined' && $innerWidth > 960) {
		wrapperClass += ' has-headline';
		sectionClass = 'has-headline';
	}
	if (typeof presection != 'undefined' ) {
		wrapperClass += ' has-pre-section';
		sectionClass = 'has-pre-section';
	}
</script>
<svelte:head>
	{#if section.inview}
		{#if typeof presection != 'undefined'}
			<link rel="preload" as="image" href={presection.image.src} type="{presection.image.type}">
		{/if}
	{/if}
</svelte:head>
<section class={sectionClass} use:inview={section.options} on:change={section.change}>
	<div class="container">
		<div class={wrapperClass}>
			{#if title && $innerWidth > 960}
				<h3>{@html title}</h3>
			{/if}
			{#if typeof presection != 'undefined'}
				<div class="pre-section" >
					{#if presection.title.length > 0}
						<h3>
							<FadeIn inview={section}>
								{@html presection.title}
							</FadeIn>
						</h3>
					{/if}
					{#if presection.desc.length > 0}
						<p>
							<FadeIn inview={section}>
								{@html presection.desc}
							</FadeIn>
						</p>
					{/if}
					{#if presection.image.src.length > 0}
						<FadeIn inview={section}>
							<img src={presection.image.src} alt="" type="{presection.image.type}" loading="lazy">
						</FadeIn>
					{/if}
				</div>
			{/if}
			{#each data as item, index}
				{#if item.show == true}
					<Headline {item} titled={title != undefined ? true : false} {index} />
					{/if}
			{/each}
		</div>
	</div>
</section>

<style>
	section.has-headline,
	section.has-pre-section {
		min-height: var(--description-min-height);
	}
	.grid {
		display: grid;
		grid-auto-flow: row;
		grid-template-columns: 1fr;
		gap: var(--headlines-grid-gap);
		align-items: center;
		justify-items: center;
		padding: var(--headlines-padding);
	}
	.grid.has-pre-section .pre-section {
		text-align: center;
		display: grid;
		row-gap: 1rem;
		grid-template-rows: minmax(20vh,1fr) auto;
		align-items: center;
	}
	.grid.has-pre-section h3 {
		font-size: 20px;
		font-weight: 500;
	}
	@media (min-width: 960px) {
		.grid {
			padding: 0;
			max-height: var(--section-min-height);
			gap: var(--headlines-grid-gap);
			grid-template-columns: 1fr 1fr 1fr;
		}
		.grid.has-pre-section,.grid.has-headline {
			gap: var(--headlines-grid-gap);
			padding: 0;
			min-height: var(--section-min-height);
			row-gap: 0;
			padding-bottom: 6rem;
			max-height: unset;
		}
		.grid.has-headline {
			grid-template-rows: 1fr 1fr 120px;
			grid-template-columns: 1fr 1fr 1fr;
			min-height: var(--section-min-height);
		}
		.grid.has-pre-section {
			grid-template-columns: 1fr 1fr 1fr;
			min-height: var(--section-min-height);
			row-gap: 2rem;
			justify-content: center;
			justify-items: center;
		}
		.grid.has-headline h3 {
			font-size: 20px;
			font-weight: 500;
			grid-row: 1 / 2;
			grid-column: 1 / 4;
			align-self: center;
			justify-self: center;
			font-size: 80px;
			padding: 120px 0;
		}
		.grid.has-pre-section .pre-section {
			grid-row: 1 / 2;
			grid-column: 1 / 4;
			text-align: center;
			display: grid;
			row-gap: 1rem;
			grid-template-rows: 50vh auto;
			align-items: center;
			max-width: var(--container-max-width);
		}
		.grid.has-pre-section h3 {
			font-size: 64px;
		}
		.grid.has-pre-section img {
			width: 100%;
			border-radius: 20px;
		}
		:global(.grid.has-headline h3 b, .grid.has-pre-section h3 b) {
			font-weight: bold;
		}
	}
	@media (prefers-color-scheme: dark) {
		.grid.has-pre-section h3,
		.grid.has-headline h3 {
			mix-blend-mode: screen;
			color: var(--actionColor);
		}
	}
</style>
