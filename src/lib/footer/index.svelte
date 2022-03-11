<script>
	import Submit from '$lib/components/email/submit.svelte';
	import MailerLite from '$lib/components/email/mailerLite.svelte';
	import Logo from '$lib/components/Logo/index.svelte';
	import FooterNav from '$lib/components/navs/footer/FooterNav.svelte';
	import Social from '$lib/components/navs/social/Social.svelte';
	import Copyright from '$lib/components/navs/copyright/Copyright.svelte';
</script>

<footer>
	<div class="container">
		<!-- <Submit /> -->
		<MailerLite />
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
	footer {
		width: 100%;
		position: relative;
		z-index: 1;
		background: var(--bkg);
	}
	.container {
		display: grid;
		grid-auto-flow: row;
		grid-template-columns: 1fr;
	}
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
	@media (min-width: 960px) {
		footer {
			/* max-width: 90%; */
			margin: 0 auto;
		}
		.container {
			--columns: 1fr;
			grid-template-columns: var(--columns);
			grid-template-rows: auto 1fr auto;
		}
		.logo-link {
			--padding: 0;
			--min-height: unset;
			--width: auto;
			border: none;
			justify-items: start;
		}
		.d-container {
			display: grid;
			padding: 50px 0 60px;
			grid-auto-flow: column;
			grid-column-gap: 40px;
		}
	}
</style>
