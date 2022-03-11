<script>
	import { inview } from 'svelte-inview';
	import { assets } from '$app/paths';
	let isInView;
	let scrollDirection;
	const options = {
		unobserveOnEnter: false
	};
	const handleChange = ({ detail }) => {
		isInView = detail.inView;
		scrollDirection = detail.scrollDirection.vertical;
	};
	export let type;
	export let item;
	export let index;
</script>

<div class={`item ${type} item-${index}`} use:inview={options} on:change={handleChange}>
	<div class="image-wrapper">
		{#if isInView}
			<img src={item.image} alt="" width="400" height="400" class="main" loading="lazy" />
			{#if item.artwork !== undefined}
				<img
					src={item.artwork}
					alt=""
					class="artwork"
					width="400"
					height="400"
					loading="lazy"
				/>
			{/if}
		{/if}
	</div>
	<div class="info-wrapper">
		<div class="info">
			<div class="name">{item.name}</div>
			<div class="title">{item.position}</div>
		</div>
	</div>
</div>

<style>
	.item {
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-flow: row;
		grid-template-rows: 72.25% auto;
		aspect-ratio: 1/1;
		width: 100%;
		border-radius: 20px;
		overflow: hidden;
	}
	.info-wrapper {
		background: #f1f1f3;
	}
	.title {
		font-size: 1rem;
		font-weight: 500;
	}
	.name {
		font-size: 1.1rem;
		font-weight: 600;
	}
	.image-wrapper {
		background: #f1f1f3;
		position: relative;
		overflow: hidden;
	}
	img {
		width: 100%;
		height: auto;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		transition: opacity cubic-bezier(0.39, 0.575, 0.565, 1) 1s;
	}

	.item.team img.artwork,
	.item.advisor img.artwork {
		opacity: 0;
	}

	.info {
		display: grid;
		height: 100%;
		grid-auto-flow: row;
		align-items: center;
		padding: 1rem;
	}
	@media (min-width: 960px) {
		.item {
			max-width: 400px;
			width: 100%;
		}
		.item-0 {
			grid-column: 1/2;
			grid-row: 2/4;
		}
		.item-1 {
			grid-column: 2/3;
			grid-row: 1/3;
		}
		.item-2 {
			grid-column: 2/3;
			grid-row: 3/5;
		}
		.item-3 {
			grid-column: 3/4;
			grid-row: 2/4;
		}
		.item.team:hover img.main {
			opacity: 0;
		}
		.item.team:hover img.artwork {
			opacity: 1;
		}
	}
</style>
