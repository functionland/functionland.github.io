<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../styles/app.css';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />