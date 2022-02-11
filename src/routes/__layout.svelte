<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<header>
<Header />
</header>
<main>
	<slot />
</main>

<footer>
</footer>

<style>
	header {
		z-index: 1;
		display: flex;
		justify-content: space-between;
        height: 60px;
        align-items: center;
        align-content: center;
        background: var(--header-bg);
		position: relative;
	}
	main {
		position: relative;
		z-index: 0;
	}
</style>
