<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import BackToTop from '$lib/components/back-to-top/backToTop.svelte';
	import '../styles/app.css';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
<BackToTop />