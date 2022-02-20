<script context="module">
	import { browser, dev } from '$app/env';
	export const hydrate = dev;
	export const router = browser;
	export const prerender = true;
</script>
<svelte:head>
	<title>About Us</title>
</svelte:head>
<div class="content">
	<h1>About this app</h1>
</div>
