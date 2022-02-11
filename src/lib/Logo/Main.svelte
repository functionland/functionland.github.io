<script>
    import { assets } from '$app/paths';
    import { page } from '$app/stores';
    const logoWhite = assets + "images/layout/logo-w.svg";
    const logoBlack = assets + "images/layout/logo-b.svg";
    const closeMenuOnClick = () => {
        page.menuOpen = false;
	};
    $: page.navClass = page.menuOpen === true ? "open" : "close";
</script>
<a sveltekit:prefetch href="/" class="logo-link" title="FunctionLand" on:click={closeMenuOnClick}>
    <picture>
        <source media="(prefers-color-scheme: dark)" sveltekit:prefetch srcset={logoWhite}>
        <source media="(prefers-color-scheme: light)" sveltekit:prefetch srcset={logoBlack}>
        <img src={logoBlack} alt="FunctionLand" class="logo">
    </picture>
</a>
<style>
    .logo-link {
        display: flex;
        align-items: center;
        align-content: center;
        position: relative;
        z-index: 1;
    }

    .logo {
        width: auto;
        height: 35px;
        display: block;
    }
</style>