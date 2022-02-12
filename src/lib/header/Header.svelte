<script context="module">
	export const prerender = true;
</script>
<script>
    // import { media } from 'svelte-match-media';
    import { page } from '$app/stores';
    import { assets } from '$app/paths';
    import Logo from '$lib/components/Logo/Logo.svelte';
    const menuIcon = assets + "images/layout/menu.png";
	export const navItems = [
        {
            path: "/",
            text: "Home"
        },
        {
            path: "/blog",
            text: "Blog"
        },
        {
            path: "/about",
            text: "About Us"
        },
        {
            path: "/nft",
            text: "NFT"
        },
        {
            path: "/fula-protocol",
            text: "FULA Protocol"
        }
    ];
	const ctaItem = {
		path: "/preorder",
		text: "Pre-Order"
	};
    let menuOpen = false;
	const menuToggleClickAction = () => {
        menuOpen = !menuOpen;
	};
    const closeMenuOnClick = () => {
        menuOpen = false;
    };
    $: navClass = menuOpen === true ? "open" : "close";
</script>
<header>
    <div class="wrapper">
        <div class="overlay {navClass}" on:click={closeMenuOnClick}></div>
        <div class="header-buttons {navClass}">
            <a sveltekit:prefetch href="/" class="logo-link" title="FunctionLand" on:click={closeMenuOnClick}>
                <Logo type="default" />
            </a>
            <button on:click={menuToggleClickAction} class="toggle-menu">
                <img src={menuIcon} alt="Menu"/>
            </button>
            <!-- {#if $media.mobile}
            {/if} -->
        </div>
        <nav class={navClass}>
            <ul>
                {#each navItems as navItem}
                    <li class:active={$page.url.pathname === navItem.path}>
                        <a sveltekit:prefetch href={navItem.path} on:click={closeMenuOnClick}>{navItem.text}</a>
                    </li>
                {/each}
            </ul>
            <div class="cta">
                <a class="btn btn-cta" sveltekit:prefetch href={ctaItem.path} on:click={closeMenuOnClick}>{ctaItem.text}</a>
            </div>
        </nav>
    </div>
</header>
<style>
    .logo-link {
        align-items: center;
        align-content: center;
        position: relative;
        z-index: 1;
        height: 60px;
        width: 157px;
        grid-template-columns: 1fr;
        grid-template-rows: 60px;
        display: grid;
    }
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 50px;
		justify-content: start;
		align-items: center;
        align-content: start;
        height: 100%;
		list-style: none;
	}
	li {
		position: relative;
		height: 100%;
	}
	li a::before {
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		bottom: 0;
		border-bottom: 2px solid transparent;
		left: 13px;
		transition: border-bottom-color 0.2s ease-in-out, width 0.2s ease-in-out, left 0.2s ease-in-out, right 0.2s ease-in-out;
		transform-origin: 50% 50%;
	}
	li.active a::before {
		width: 50%;
		left: calc(100% - 13px - 50%);
		border-bottom-color: var(--active-menu-border-color);
	}
	li a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--menu-item-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
    nav {
        display: grid;
        justify-content: start;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        width: 100%;
        overflow: hidden;
    }    
    
	header {
		z-index: 10;
        background: var(--header-bg);
		position: sticky;
		position: -webkit-sticky;
		width: 100%;
        max-width: 100vw;
        grid-row: 1/2;
        top: 0;
        right: 0;
        left: 0;
	}
    .wrapper {
		display: flex;
		justify-content: space-between;
        height: 60px;
        align-items: center;
        align-content: center;
        background: var(--header-bg);
		gap: 3rem;
    }
    @media (min-width: 960px) {
        .toggle-menu {
            display: none;
        }
        li:not(.active):hover a {
            color: var(--menu-item-hover-color);
        }
        li:not(.active):hover a::before {
            width: 50%;
            border-bottom-color: var(--hover-menu-border-color);
        }
        .overlay {
            display: none;
        }
        nav, ul {
            grid-auto-flow: column;
            grid-template-columns: unset;
            grid-template-rows: unset;
            grid-auto-rows: 100%;
        }
        nav {
            grid-template-columns: 1fr auto;
            justify-items: space-between;
        }
        
        


    }

    @media (max-width: 959px) {
        :root {
            --menuopen-border-color: var(--b-o-1);
        }
        .overlay {
            background: var(--b-o-4);
            pointer-events: none;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            height: 100vh;
            z-index: -2;
            opacity: 0;
            transition: 0.25s opacity 0.15s ease-in-out;
        }
        .header-buttons {
            height: 60px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            grid-template-columns: 157px auto;
            align-content: center;
            align-items: center;
            background: var(--header-bg);
            z-index: 1;
            position: relative;
            padding: 0 15px;
        }
        .header-buttons:after{
            content: '';
            width: 0;
            position: absolute;
            top: 60px;
            right: 0;
            opacity: 0;
            border-bottom: 1px solid var(--menuopen-border-color);
            transition: 0.35s width 0s ease-in-out, 0.55s opacity 0s ease-in-out;
            will-change: width, opacity;
        }
        nav {
            position: absolute;
            /* top: calc((100vh - 60px) * -1); */
            /* height: calc(100vh - 60px); */
            background: var(--header-bg);
            width: 65%;
            left: 35%;
            bottom: 0;
            opacity: 0;
            height: calc(100vh - 60px);
            top: 60px;
            pointer-events: none;
            border-left: 1px solid transparent;
            transform: translateX(100%);
            transition: 0.15s transform 0.3s ease-in-out, 0.15s opacity 0.3s ease-in-out, border-left-color 0.3s ease-in-out;
            z-index: -1;
        }
        li {
            opacity: 0;
            transform: translateX(100%);
        }
        li.active a::before {
            border-bottom-color: var(--menuopen-border-color);
        }
        ul li:nth-child(1) {
            transition: 0.35s transform 0.1s ease-in-out, 0.35s opacity 0.1s ease-in-out;
        }
        ul li:nth-child(2) {
            transition: 0.35s transform 0.15s ease-in-out, 0.35s opacity 0.15s ease-in-out;
        }
        ul li:nth-child(3) {
            transition: 0.35s transform 0.2s ease-in-out, 0.35s opacity 0.2s ease-in-out;
        }
        ul li:nth-child(4) {
            transition: 0.35s transform 0.25s ease-in-out, 0.35s opacity 0.25s ease-in-out;
        }
        ul li:nth-child(5) {
            transition: 0.35s transform 0.3s ease-in-out, 0.35s opacity 0.3s ease-in-out;
        }
        ul li a::before {
            left: calc((100% - 13px - 50%) * -1.2);
            transition: border-bottom-color 0.2s ease-in-out, width 0.2s ease-in-out, 0.45s left 0s ease-in-out;
        }
        ul li.active a::before {
            transition: border-bottom-color 0.2s ease-in-out, width 0.2s ease-in-out, 0.45s left 0s ease-in-out;
            left: calc(((100%  * -1) - 13px - 50%) * 1.2);
        }
        .open ul li {
            opacity: 1;
            transform: translateX(0);
        }
        .open li.active a::before {
            left: calc((100% - 13px - 50%) * 1);
            transition: border-bottom-color 0.2s ease-in-out, width 0.2s ease-in-out, 0.45s left 0.15s ease-in-out;
        }
        nav.open {
            opacity: 1;
            pointer-events: all;
            transform: translateX(0%);
            border-left-color: var(--menuopen-border-color);
        }

        .header-buttons.open:after {
            /* transition: 0.25s left 0.45s ease-in-out, 0.25s opacity 0.45s ease-in-out; */
            transition: 0.45s width 0.2s ease-in-out, 0.25s opacity 0.2s ease-in-out;
            width: 100%;
            opacity: 1;
        }

        .overlay.open {
            transition: 0.35s opacity 0.15s ease-in-out;
            pointer-events: all;
            opacity: 1;
        }
        .cta {
            display: grid;
            padding: 1rem 10px;
            grid-template-columns: auto;
            align-content: center;
            justify-content: end;
            text-align: revert;
        }
        .btn-cta {
            opacity: 0;
            transform: translateX(-100%);
            transition: 0.35s opacity 0s ease-in-out, 0.35s transform 0s ease-in-out;
        }
        .open .btn-cta {
            opacity: 1;
            transform: translateX(0);
            transition: 0.3s opacity 0.35s ease-in-out, 0.3s transform 0.35s ease-in-out;
        }
    }
	@media (min-width: 960px) {
		header {
            overflow: visible;
		}
        .wrapper {
            position: relative;
            z-index: 2;
			padding: 0 3rem;
			margin: 0 auto;
            z-index: 2;
            background: var(--header-bg);
            width: 100%;
            height: 100%;
        }
        header::after {
            content: '';
            position: absolute;
            top: 15px;
            height: 25px;
            width: 100%;
            left: 0;
            right: 0;
            z-index: 1;
            box-shadow: 0 4px 30px 0 var(--text-color);
        }
	}
	@media (max-width: 959px) {
		header {
			padding: 0;
		}
	}
    @media (prefers-color-scheme: dark) {
        :root {
            --menuopen-border-color: var(--w-o-3);
        }
    }
    @media (prefers-color-scheme: dark) and (max-width: 959px) {
        .toggle-menu img {
            transition: filter 0.2s ease-in-out;
        }
        .toggle-menu img {
            filter: invert(1);
        }
        .overlay {
            background: var(--b-o-5);
        }
    }
</style>
