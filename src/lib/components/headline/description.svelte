<script>
	import { innerWidth } from 'svelte-window-stores/viewport';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import Videos from '$lib/components/headline/videos.svelte';
	import Photos from '$lib/components/headline/images.svelte';
	export let data;
	const descView = {
		inview: false,
		options: {
			threshold: 0.01,
			unobserveOnEnter: false
		},
		scrollDirection: '',
		fadeIn: {
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
		},
		change:({ detail }) => {
			descView.inview = detail.inView;
			descView.scrollDirection = detail.scrollDirection.vertical;
		},
	}
</script>

{#each data as item}
	<section id={item.ref} use:inview={descView.options} on:change={descView.change}>
		<div class="container">
			<div class="wrapper {item.ref}">
				{#if $innerWidth >= 960}
					{#if item.ref == 'plug-n-play'}
						<h3
							class:fade-in-right-delay={descView.inview}
							class:fade-out-right-delay={!descView.inview}>
							{item.main_title}
						</h3>
						<p
							class:fade-in-right-delay={descView.inview}
							class:fade-out-right-delay={!descView.inview}
							class:animateHeadingFromTop={descView.scrollDirection !== 'down'}
						>
							{item.main_desc}
						</p>
					{:else}
						{#if descView.inview}
							<h3
								in:fade={(descView.scrollDirection !== 'down') ? descView.fadeIn.reveal[1] : descView.fadeIn.none}
							>{item.main_title}</h3>
							<p
								in:fade={(descView.scrollDirection !== 'down') ? descView.fadeIn.reveal[2] : descView.fadeIn.none}
							>{item.main_desc}</p>
						{:else}
						<h3>{item.main_title}</h3>
						<p>{item.main_desc}</p>
						{/if}
					{/if}
				{:else}
					{#if descView.inview}
						<h3
							in:fade={(descView.scrollDirection !== 'down') ? descView.fadeIn.reveal[0] : descView.fadeIn.none}
						>{item.main_title}</h3>
						<p
							in:fade={(descView.scrollDirection !== 'down') ? descView.fadeIn.reveal[1] : descView.fadeIn.none}
						>{item.main_desc}</p>
					{:else}
						<h3>{item.main_title}</h3>
						<p>{item.main_desc}</p>
					{/if}
				{/if}
				<Videos data={item} {descView}/>
				<Photos data={item} {descView}/>
			</div>	
		</div>
	</section>
{/each}

<style>
	.hidden {
		opacity: 0;
	}
	section,
	.wrapper {
		min-height: var(--description-min-height);
	}
	.fade-in-right-delay {
		animation: fade-in-right 1s ease-in-out normal both;
		animation-delay: 0.8s;
	}
	.fadeout-right-delay {
		animation: fade-out-right 0.4s ease-in-out normal both;
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
		.wrapper.plug-n-play,
		.wrapper.customizable {
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
			padding-bottom: 0;
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
