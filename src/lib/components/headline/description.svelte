<script>
    import { inview } from 'svelte-inview';
	import Videos from '$lib/components/headline/videos.svelte';
	import Photos from '$lib/components/headline/images.svelte';
	export let data;

    let isInView, scrollDirection, innerWidth;
    const handleChange = ({ detail }) => {
        isInView = detail.inView;
        scrollDirection = detail.scrollDirection.vertical;
    };
</script>
<svelte:window bind:innerWidth={innerWidth} />
{#each data as item}
	<section id={item.ref} use:inview on:change={handleChange}>
		<div class="container">
			<div class="wrapper {item.ref}">
				{#if innerWidth >= 960} 
					{#if item.ref == 'plug-n-play'}
					<h3
						class:fade-in-right-delay={isInView}
						class:fade-out-right-delay={!isInView}>{item.main_title}</h3>
					<p
						class:fade-in-right-delay={isInView}
						class:fade-out-right-delay={!isInView}
						class:animateHeadingFromTop={scrollDirection !== 'down'}>{item.main_desc}</p>
					{:else}
						<h3>{item.main_title}</h3>
						<p>{item.main_desc}</p>
					{/if}
				{:else}
					<h3>{item.main_title}</h3>
					<p>{item.main_desc}</p>
				{/if}
				<Videos data={item} />
				<Photos data={item} />
			</div>
		</div>
	</section>
{/each}

<style>
	section, .wrapper {
		min-height: var(--description-min-height);
	}
	.fade-in-right-delay {
		animation: fade-in-right 1s ease-in-out normal both;
		animation-delay: 0.8s;
	}
	.fadeout-right-delay {
		animation: fade-out-right 0.4s ease-in-out  normal both;
		animation-delay: 0.2s;
	}
	.wrapper {
		padding: 0;
		display: grid;
		overflow: hidden;
		position: relative;
		justify-items: center;
		grid-template-rows: auto auto 1fr;
		grid-row-gap: var(--description-row-gap);
	}
	.wrapper.apps-without-ads,
	.wrapper.design {
		margin-bottom: 120px;
	}
	.wrapper.earn-crypto {
		color: white;
    	background: #4c4d51;
		grid-row-gap: 20px;
	}
	.wrapper.earn-crypto:before {
		content: '';
		background: linear-gradient(180deg, #4c4d51 60.48%, rgba(79, 80, 85, 0) 92.22%);
		top: 0;
		left: 0;
		width: 100%;
		height: 50%;
		position: absolute;
		z-index: 1;
	}
	h3 {
		z-index: 1;
		margin: 0 auto;
		text-align: center;
		position: relative;
		/* max-width: var(--description-max-width); */
		padding: var(--description-title-padding);
		font-size: var(--description-title-font-size);
		line-height: var(--description-title-line-height);
		font-weight: var(--description-title-font-weight);
	}
	.wrapper.earn-crypto h3 {
		color: white;
		grid-row-gap: 20px;
		padding-bottom: 0;
	}
	p {
		z-index: 1;
		margin: 0 auto;
		position: relative;
		/* max-width: var(--description-max-width); */
		font-size: var(--description-desc-font-size);
		line-height: var(--description-desc-line-height);
	}
	.wrapper.apps-without-ads p {
		text-align: center;
		max-width: 90%;
	}
	.wrapper.earn-crypto p {
		max-width: 90%;
	}
	@media (min-width: 960px) {
		#earn-crypto .wrapper {
			border-radius: 20px;
			overflow: hidden;
		}
		p {
			max-width: 900px;
		}
		.wrapper.earn-crypto p {
			max-width: 900px;
		}
		.wrapper.plug-n-play, .wrapper.customizable {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr max-content max-content 1fr;
			align-items: center;
			justify-content: center;
			align-content: center;
		}
		.wrapper.plug-n-play h3,
		.wrapper.plug-n-play p {
			padding: 0;
			text-align: start;
			width: 100%;
			max-width: 78%;
		}
		.wrapper.customizable h3,
		.wrapper.customizable p {
			grid-column: 2/3;
			padding: 0;
			text-align: start;
			width: 100%;
			max-width: 78%;
		}
		.wrapper.plug-n-play h3,
		.wrapper.customizable h3 {
			grid-row: 2/3;
		}
		.wrapper.customizable p,
		.wrapper.plug-n-play p {
			grid-row: 3/4;
		}
	}
	@media (max-width: 959px) {
		#earn-crypto h3 {
			font-size: 52px;
		}
		section#earn-crypto {
			padding-bottom: 0
		}
		section#earn-crypto > .container {
			padding: 0;
		}
		section#earn-crypto p {
			aspect-ratio: 228/220;
			width: 100%;
			max-width: 75%;
		}
	}
</style>
