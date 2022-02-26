<script>
	import Headline from '$lib/components/headline/index.svelte';
	import { fade } from 'svelte/transition';
	import { innerWidth, innerHeight } from 'svelte-window-stores/viewport';
	import { prefersColorScheme } from 'svelte-window-stores/appearance';
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
    const fadeIn = {
        reveal: [
            { duration: 400, delay: 300 },
            { duration: 400, delay: 600 },
            { duration: 400, delay: 900 },
            { duration: 400, delay: 1200 },
            { duration: 400, delay: 1400 },
            { duration: 400, delay: 1600 },
            { duration: 400, delay: 1800 },
            { duration: 400, delay: 1800 },
        ],
        none: { duration: 0, delay: 0 }
    };
	export let data;
	export let title;
	export let presection;
	let sectionClass, wrapperClass = 'grid wrapper', prsTitle, prsImage, prsDesc;
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
				{#if section.inview}
					<div class="pre-section" >
						{#if presection.title.length > 0}
							<h3 
								in:fade={(section.scrollDirection !== 'down') ? fadeIn.reveal[0] : fadeIn.none}
								>{@html presection.title}</h3>
						{/if}
						{#if presection.desc.length > 0}
							<p 
								in:fade={(section.scrollDirection !== 'down') ? fadeIn.reveal[1] : fadeIn.none}
								>{@html presection.desc}</p>
						{/if}
						{#if presection.image.src.length > 0}
							<img src={presection.image.src} alt="" type="{presection.image.type}" loading="lazy" 
								in:fade={(section.scrollDirection !== 'down') ? fadeIn.reveal[2] : fadeIn.none}>
						{/if}
					</div>
				{:else}
					<div class="pre-section">
						{#if presection.title.length > 0}
							<h2 class="hidden">{@html presection.title}</h2>
						{/if}
						{#if presection.desc.length > 0}
							<p class="hidden">{@html presection.desc}</p>
						{/if}
						{#if presection.image.src.length > 0}
							<img class="hidden" src={presection.image.src} alt="" type="{presection.image.type}" loading="lazy">
						{/if}
					</div>
				{/if}
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
		color: #00D0D0;
		font-size: 20px;
		font-weight: 600;
		mix-blend-mode: multiply;
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
			grid-template-columns: 1fr 2fr;
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
			grid-row: 1 / 2;
			grid-column: 1 / 5;
			align-self: center;
			justify-self: center;
			font-size: 80px;
			padding: 120px 0;
		}
		.grid.has-pre-section .pre-section {
			grid-row: 1 / 2;
			grid-column: 1 / 5;
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
</style>
