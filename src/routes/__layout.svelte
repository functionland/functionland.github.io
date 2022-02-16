<script context="module">
	export const prerender = true;
</script>

<script>
	import Header from '$lib/header/index.svelte';
	import Footer from '$lib/footer/index.svelte';
	import BackToTop from '$lib/components/back-to-top/index.svelte';
	import '../styles/app.css';
</script>

<Header />
<slot />
<Footer />
<BackToTop />
