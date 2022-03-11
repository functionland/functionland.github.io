<script>
	import Discord from '$lib/img/social/discord.svelte';
	import Twitter from '$lib/img/social/twitter.svelte';
	// import Facebook from '$lib/img/social/facebook.svelte';
	import Github from '$lib/img/social/github.svelte';
	import Instagram from '$lib/img/social/instagram.svelte';
	import Linkedin from '$lib/img/social/linkedin.svelte';
	import Telegram from '$lib/img/social/telegram.svelte';
	export let name;
	export let width;
	export let height;
</script>

{#if name === 'Discord'}
	<svelte:component this={Discord} {width} {height} />
{:else if name === 'Twitter'}
	<svelte:component this={Twitter} {width} {height} />
{:else if name === 'GitHub'}
	<svelte:component this={Github} {width} {height} />
{:else if name === 'Telegram'}
	<svelte:component this={Telegram} {width} {height} />
{:else if name === 'Instagram'}
	<svelte:component this={Instagram} {width} {height} />
{:else if name === 'LinkedIn'}
	<svelte:component this={Linkedin} {width} {height} />
{/if}
