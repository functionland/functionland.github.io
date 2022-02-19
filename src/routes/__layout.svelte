<script context="module">
	export const prerender = true;
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url }) => ({ props: { url } });
</script>
<script>
	import Header from '$lib/header/index.svelte';
	import Footer from '$lib/footer/index.svelte';
	// import BackToTop from '$lib/components/back-to-top/index.svelte';
	import '../styles/app.css';
	import '../styles/animations.css';
</script>

<Header />
<slot />
<Footer />
<!-- <BackToTop /> -->
