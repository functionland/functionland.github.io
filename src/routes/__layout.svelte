<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.css';
	import '../main.js';
</script>
<Header />
<main>
	<slot />
</main>
<Footer />
<style>
	main {
		width: 100%;
    	max-width: 100vw;
		grid-row: 2/3;
	}
</style>
