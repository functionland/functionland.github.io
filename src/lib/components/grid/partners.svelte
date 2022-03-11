<script>
	export let list;
	export let type;
</script>

<div class={`wrapper ${type}`}>
	{#each list as item}
		<div class="partner">
			<picture>
				<source srcset={item.dark} media="(prefers-color-scheme: dark)" />
				<img src={item.light} alt={item.title} loading="lazy" decoding="async" class="visible" />
			</picture>
			<img src={item.main} alt={item.title} class="colored" loading="lazy" decoding="async" />
		</div>
	{/each}
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: repeat(2, auto);
		grid-auto-flow: row;
		grid-gap: 2rem;
		align-items: center;
		align-content: center;
		justify-content: center;
		justify-items: center;
		width: 100%;
		gap: 3rem;
	}
	picture {
		position: relative;
		display: grid;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	img {
		display: block;
		width: auto;
		max-height: 56px;
		max-width: 120px;
	}
	img.colored {
		opacity: 0;
	}
	.partner {
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		align-items: center;
		align-content: center;
		justify-content: center;
		justify-items: center;
	}
	.partner picture,
	.partner .colored {
		grid-column: 1/-1;
		grid-row: 1/-1;
		transition: opacity 0.4s, transform 0.4s;
	}
	@media (min-width: 960px) {
		.wrapper {
			grid-template-columns: repeat(5, auto);
			max-width: 1207px;
			margin: 0 auto;
			/* grid-template-columns: repeat(5, auto);
            gap: 3rem;
            max-width: fit-content;
            margin: 0 auto; */
		}

		.partner:hover picture {
			opacity: 0;
			transform: scale(1.1);
		}
		.partner:hover {
			overflow: visible;
			z-index: 2;
		}
		.partner:hover .colored {
			opacity: 1;
			transform: scale(1.1);
		}
	}
	@media (min-width: 1300px) {
	}
</style>
