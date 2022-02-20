<script>
	import ErrorScreen from '$lib/components/screen/ErrorScreen.svelte'; // your own Error screen component
	import NotFoundScreen from '$lib/components/screen/NotFoundScreen.svelte'; // your own 404 screen component
	export let message;
	export let status;
</script>

{#if status == 404}
	<!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
	<NotFoundScreen {status} {message} />
{:else}
	<ErrorScreen {status} {message} />
{/if}
