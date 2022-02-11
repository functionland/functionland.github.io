<script>
    import { page } from '$app/stores';
	const closeMenuOnClick = () => {
		console.log('page.navClass');
		console.log(page.navClass);
		page.menuOpen = "";
		page.menuOpen = false;
		console.log('page.navClass');
		console.log(page.navClass);
	};
    $: page.navClass = page.menuOpen === true ? "open" : "close";
</script>
<style>


</style>