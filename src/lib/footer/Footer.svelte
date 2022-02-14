<script context="module">
	export const prerender = true;
</script>

<script>
	import Submit from '$lib/components/email/submit.svelte';
	import Logo from '$lib/components/Logo/Logo.svelte';
	import FooterNav from '$lib/components/navs/footer/FooterNav.svelte';
	import Social from '$lib/components/navs/social/Social.svelte';
	import Copyright from '$lib/components/navs/copyright/Copyright.svelte';
</script>

<footer>
	<div class="container">
		<Submit />
		<div class="d-container">
			<a sveltekit:prefetch href="/" class="logo-link" title="FunctionLand">
				<Logo type="portrait" />
			</a>
			<FooterNav />
			<Social />
		</div>
		<Copyright />
	</div>
</footer>

<style>
	.logo-link {
		--padding: 41px 0;
		--min-height: 109px;
		--width: 100%;
		align-items: center;
		align-content: center;
		position: relative;
		z-index: 1;
		min-height: var(--min-height);
		padding: var(--padding);
		width: var(--width);
		grid-template-columns: 1fr;
		grid-template-rows: var(--min-height);
		display: grid;
		justify-items: center;
		justify-content: center;
		border: 1px solid var(--footer-nav-border-color);
		border-left: none;
		border-right: none;
	}
	footer {
		width: 100%;
	}
	.container {
		--container-padding: 0 16px;
		--columns: 1fr;
		display: grid;
		grid-auto-flow: row;
		grid-template-columns: 1fr;
	}
	@media (min-width: 960px) {
		footer {
			max-width: 90%;
			margin: 0 auto;
		}
		.container {
			--container-padding: 0;
			--columns: 1fr;
			grid-template-columns: var(--columns);
			grid-template-rows: auto 1fr auto;
		}
		.logo-link {
			--padding: 0;
			--min-height: unset;
			--width: auto;
			border: none;
		}
		.d-container {
			display: flex;
			justify-content: space-between;
			flex-direction: row;
			padding: 50px 0 60px;
		}
	}
</style>
