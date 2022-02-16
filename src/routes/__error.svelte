<script context="module">
	export const prerender = true;
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				message: error.message,
				status
			}
		};
	}
</script>

<script>
	import ErrorScreenHandler from '$lib/components/error/index.svelte';
	export let message;
	export let status;
</script>

<ErrorScreenHandler {message} {status} />
