<script context="module">
	export const prerender = true;
</script>
<script>
    import * as animateScroll from "svelte-scrollto";
    animateScroll.setGlobalOptions({
        offset: -60,
    })
	import Header from '$lib/header/index.svelte';
	import '../styles/app.css';
	import '../styles/animations.css';
</script>
<Header />
<slot />
<style>
</style>
