<script context="module">
	export const prerender = true;
</script>

<script>
	import GetIcon from './getIcon.svelte';
	const socials = [
		{
			url: 'https://discord.gg/k9UybUBdBB',
			name: 'Discord',
			width: '28px',
			height: '21.34px'
		},
		{
			url: 'https://twitter.com/functionland',
			name: 'Twitter',
			width: '28px',
			height: '22.75px'
		},
		{
			url: 'https://github.com/functionland',
			name: 'GitHub',
			width: '28px',
			height: '27.31px'
		},
		{
			url: 'https://t.me/functionland',
			name: 'Telegram',
			width: '28px',
			height: '28px'
		},
		{
			url: 'https://www.instagram.com/functionland',
			name: 'Instagram',
			width: '28px',
			height: '28px'
		},
		{
			url: 'https://www.linkedin.com/company/functionland',
			name: 'LinkedIn',
			width: '28px',
			height: '28px'
		}
	];
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
			display: flex;
		}
		ul {
			--row-gap: 40px;
			column-gap: 40px;
		}
		a {
			--size: auto;
		}
	}
</style>
