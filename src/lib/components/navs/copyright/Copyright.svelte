<script>
	import { copyright_nav } from '$lib/components/data-mocks/navItems.svelte';
	import { page } from '$app/stores';
	const currentYear = new Date().getFullYear();
	const startYear = '2022';
	let yearString = '';
	if (currentYear >= startYear) {
		yearString = startYear + ' - ' + currentYear;
	} else {
		yearString = startYear;
	}
	const navItems = copyright_nav.list;
</script>

<div class="copyright">
	<ul>
		{#each navItems as navItem}
			<li class:active={$page.url.pathname === navItem.path}>
				<a sveltekit:prefetch href={navItem.path}>{navItem.text}</a>
			</li>
		{/each}
	</ul>
	<div>
		© <a sveltekit:prefetch href="/">Functionland</a>, Inc. {yearString}. We love our users!
	</div>
</div>

<style>
	.copyright {
		--padding: 40px 15px;
		padding: var(--padding);
		font-size: var(--small-f-size);
	}
	ul {
		margin-bottom: 1rem;
		display: grid;
		width: 100%;
		row-gap: 0.5rem;
		grid-auto-rows: 24px;
	}
	@media (min-width: 960px) {
		.copyright {
			--padding: 40px 0 80px;
			grid-row: 3 / 4;
			grid-column: 1 / -1;
			display: grid;
			grid-auto-flow: columns;
			grid-template-columns: 1fr auto;
			align-items: center;
			align-content: center;
			height: 30px;
			border-top: 1px solid var(--footer-nav-border-color);
		}
		ul {
			grid-auto-flow: column;
			grid-auto-rows: unset;
			grid-column: 2/3;
			grid-row: 1/-1;
			grid-auto-rows: unset;
			align-items: center;
			align-content: center;
			height: 100%;
			margin-bottom: 0;
			column-gap: 40px;
		}
		div {
			grid-row: 1/-1;
			grid-column: 1/2;
		}
	}
</style>
