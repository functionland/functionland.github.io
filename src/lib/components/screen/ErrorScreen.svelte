<script>
	import error from '$lib/img/layout/error.svelte';
	import Logo from '$lib/components/Logo/index.svelte';
	export let status;
	export let message;
</script>

<section>
	<div class="title">Oops!...</div>
	<svelte:component this={error} width={404} height={404} class="icon" />
	<div class="message">An error has occurred!</div>
	<div class="error">
		<div class="err-status">{status}</div>
		<div class="err-message">{message}</div>
	</div>
	<a sveltekit:prefetch href="/" class="logo-link" title="FunctionLand">
		<Logo type="mark" />
		<span>Click here to go to FunctionLand's home page and find out more about the box!</span>
	</a>
</section>
