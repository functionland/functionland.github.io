<script>
	import GetIcon from './getIcon.svelte';
	import { social_nav as socials } from '$lib/components/data-mocks/navItems.svelte';
</script>

<nav>
	<ul>
		{#each socials as social}
			<li>
				<a target="_blank" href={social.url} aria-label="FunctionLand on {social.name}">
					<GetIcon name={social.name} width={social.width} height={social.height} />
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		--social-padding: 40px 0;
		border: 1px solid var(--footer-nav-border-color);
		border-right: 0;
		border-left: 0;
		padding: var(--social-padding);
	}
	ul {
		--row-gap: 40px;
		display: grid;
		grid-auto-flow: row;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: auto;
		grid-template-rows: 1fr 1fr;
		row-gap: var(--row-gap);
		align-items: center;
		justify-items: center;
	}
	a {
		--size: 50px;
		display: grid;
		align-items: center;
		justify-items: center;
		text-decoration: none;
		width: var(--size);
		height: var(--size);
	}
	@media (min-width: 960px) {
		nav {
			--social-padding: 0;
			border: none;
			align-items: center;
			display: grid;
		}
		ul {
			--row-gap: 40px;
			column-gap: 20px;
		}
		a {
			--size: auto;
		}
	}
</style>
