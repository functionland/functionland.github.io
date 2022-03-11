<script>
	import { page } from '$app/stores';
	export let title;
	export let items;
</script>

<div class="heading">
	{title}
</div>
<ul>
	{#each items as item}
		<li class:active={$page.url.pathname === item.path}>
			{#if item.internal === true}
				<a sveltekit:prefetch href={item.path}>{item.text}</a>
			{:else if item.internal === false} 
				<a href={item.path} rel="external" >{item.text}</a>
			{:else} 
				<a href={item.path}>{item.text}</a>
			{/if}
		</li>
	{/each}
</ul>

<style>
	.heading {
		--heading-font-size: 15px;
		--heading-font-weight: 700;
		--heading-color: var(--black);
		--heading-line-height: 24px;
		--heading-height: 24px;
		--heading-margin-b: 4px;
		font-size: var(--heading-font-size);
		font-weight: var(--heading-font-weight);
		color: var(--heading-color);
		line-height: var(--heading-line-height);
		height: var(--heading-height);
		margin-bottom: var(--heading-margin-b);
	}

	ul {
		--row-gap: 0.5rem;
		display: grid;
		grid-auto-flow: row;
		grid-template-columns: 1fr;
		row-gap: var(--row-gap);
	}

	li {
		display: inline-block;
		width: 100%;
	}

	a {
		--font-size: 15px;
		text-decoration: none;
		font-size: var(--font-size);
		letter-spacing: var(--letter-spacing);
	}
	@media (prefers-color-scheme: dark) {
		.heading {
			--heading-color: var(--white);
		}
	}
</style>
