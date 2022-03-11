<script>
	import NavMaker from '$lib/components/navs/footer/NavMaker.svelte';
	import { company_nav as company } from '$lib/components/data-mocks/navItems.svelte';
	import { help_nav as help } from '$lib/components/data-mocks/navItems.svelte';
	import { resources_nav as resources } from '$lib/components/data-mocks/navItems.svelte';
</script>

<div>
	<nav>
		<NavMaker {...company} />
	</nav>
	<nav>
		<NavMaker {...resources} />
	</nav>
	<nav>
		<NavMaker {...help} />
	</nav>
</div>

<style>
	div {
		--padding: 7px 15px 13px;
		--gap: 1rem;
		--columns: 1fr 1fr;
		--rows: 1fr 1fr;
		display: grid;
		grid-template-columns: var(--columns);
		grid-template-rows: var(--rows);
		padding: var(--padding);
		row-gap: var(--gap);
	}
	nav:nth-child(3) {
		--column: 1 / 3;
		grid-column: var(--column);
	}
	@media (min-width: 960px) {
		div {
			--padding: 0;
			--columns: 1fr 1fr 1fr;
			--rows: 1fr;
			align-items: center;
		}
		nav:nth-child(3) {
			--column: 3;
		}
	}
</style>
