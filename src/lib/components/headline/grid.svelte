<script>
	import Headline from '$lib/components/headline/index.svelte';
    import { inview } from 'svelte-inview';
	const inViewOptions = {
		threshold: 1,
		unobserveOnEnter: false,
	};
    let isInView, scrollDirection;
    const handleChange = ({ detail }) => {
        isInView = detail.inView;
        scrollDirection = detail.scrollDirection.vertical;
    };
	export let data;
	export let title;
	let innerWidth
</script>
<svelte:window bind:innerWidth={innerWidth} />
<section use:inview={inViewOptions} on:change={handleChange}>
	<div class="container">
		<div class={(typeof title != "undefined" && innerWidth > 960 ) ? "titled grid" : "grid"} >
			{#if (title && innerWidth > 960)} 
				<h3>{@html title}</h3>
			{/if}
			{#if data.length <= 3} 
				{#each data as item,index}
				{#if index == 0}
					<div class="item"
						class:animate_1={isInView}
						class:animateFromBottom_1={scrollDirection === 'down'}
						class:animateFromTop_1={scrollDirection !== 'down'}>
						<Headline {item} />
					</div>
				{:else if index == 1}
					<div class="item"
						class:animate_2={isInView}
						class:animateFromBottom_2={scrollDirection === 'down'}
						class:animateFromTop_2={scrollDirection !== 'down'}>
						<Headline {item} />
					</div>
				{:else}
					<div class="item"
						class:animate_3={isInView}
						class:animateFromBottom_3={scrollDirection === 'down'}
						class:animateFromTop_3={scrollDirection !== 'down'}>
						<Headline {item} />
					</div>
				{/if}
				{/each}
			{:else}
				{#each data as item,index}
					<div class="item"
						class:animate={isInView}
						class:animateFromBottom={scrollDirection === 'down'}
						class:animateFromTop={scrollDirection !== 'down'}>
						<Headline {item} />
					</div>
				{/each}
			{/if}
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-auto-flow: row;
		row-gap: var(--headlines-grid-gap);
		align-items: center;
		justify-items: center;
		padding: var(--headlines-padding);
	}
	.grid.titled {
		padding: 0;
		max-height: var(--section-min-height);
		grid-template-rows: minmax(500px,1fr) auto 1fr ;
	}
	.grid.titled h3 {
		grid-row: 1 / 2;
		grid-column: 1 / 5;
		align-self: center;
		justify-self: center;
		font-size: 80px;
		padding: 120px 0;
	}
	:global(.grid.titled h3 b) {
		font-weight: bold;
	}
	.grid.titled .item {
		grid-row: 2;
	}
	.item.animateFromTop {
		-webkit-animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.2s;
	}
	.item.animateFromTop_1 {
		-webkit-animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.2s;
	}
	.item.animateFromTop_2 {
		-webkit-animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.5s;
	}
	.item.animateFromTop_3 {
		-webkit-animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.8s;
	}
	.item.animateFromBottom {
		-webkit-animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.2s;
	}
	.item.animateFromBottom_1 {
		-webkit-animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.2s;
	}
	.item.animateFromBottom_2 {
		-webkit-animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.5s;
	}
	.item.animateFromBottom_3 {
		-webkit-animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-out-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.8s;
	}
	.item.animate {
		-webkit-animation: fade-in-bck 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-in-bck 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.2s;
	}
	.item.animate_1 {
		-webkit-animation: fade-in-bck 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-in-bck 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.2s;
	}
	.item.animate_2 {
		-webkit-animation: fade-in-bck 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-in-bck 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.5s;
	}
	.item.animate_3 {
		-webkit-animation: fade-in-bck 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-in-bck 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.8s;
	}
	@media (min-width: 960px) {
		.grid {
			grid-auto-flow: column;
			align-items: start;
			/* width: 87%; */
			/* max-width: 1530px; */
			margin: 0 auto;
			gap: 1rem;
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
</style>
