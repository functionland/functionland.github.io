<script>
    import { assets } from '$app/paths';
    const logoWhite = assets + "images/layout/logo-p-w.svg";
    const logoBlack = assets + "images/layout/logo-p-b.svg";
</script>

<a sveltekit:prefetch href="/" class="logo-link" title="FunctionLand">
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
    }

    .logo {
        width: auto;
        height: 35px;
        display: block;
    }
</style>