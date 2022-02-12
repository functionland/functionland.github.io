<script context="module">
	export const prerender = true;
    import GetLogo from './getLogo.svelte';
</script>
<script>
    export let type;
    import logoWhite from '$lib/img/layout/logo-w.svelte';
    import logoBlack from '$lib/img/layout/logo-b.svelte';
    import logoWhitePortrait from '$lib/img/layout/logo-p-w.svelte';
    import logoBlackPortrait from '$lib/img/layout/logo-p-b.svelte';
    import logoWhiteMark from '$lib/img/layout/logo-m-w.svelte';
    import logoBlackMark from '$lib/img/layout/logo-m-b.svelte';
</script>

{#if type==="portrait"}
    <svelte:component this={logoWhitePortrait} width="166px" height="109px" />
    <svelte:component this={logoBlackPortrait} width="166px" height="109px" />
{:else if type==="mark"}
    <svelte:component this={logoWhiteMark} width="157px" height="35px" />
    <svelte:component this={logoBlackMark} width="157px" height="35px" />
{:else}
    <svelte:component this={logoWhite} width="157px" height="35px" />
    <svelte:component this={logoBlack} width="157px" height="35px" />
{/if}