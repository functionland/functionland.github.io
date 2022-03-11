<script>
	export let type;
	import LogoWhite from '$lib/img/layout/logo-w.svelte';
	import LogoBlack from '$lib/img/layout/logo-b.svelte';
	import LogoWhitePortrait from '$lib/img/layout/logo-p-w.svelte';
	import LogoBlackPortrait from '$lib/img/layout/logo-p-b.svelte';
	import LogoWhiteMark from '$lib/img/layout/logo-m-w.svelte';
	import LogoBlackMark from '$lib/img/layout/logo-m-b.svelte';
</script>

{#if type === 'portrait'}
	<LogoWhitePortrait width="166px" height="109px" />
	<LogoBlackPortrait width="166px" height="109px" />
{:else if type === 'mark'}
	<LogoWhiteMark width="157px" height="35px" />
	<LogoBlackMark width="157px" height="35px" />
{:else}
	<LogoWhite width="157px" height="35px" />
	<LogoBlack width="157px" height="35px" />
{/if}
