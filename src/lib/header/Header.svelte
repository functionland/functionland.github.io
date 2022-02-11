<script>
    import { page } from '$app/stores';
    import { assets } from '$app/paths';
    const menuIcon = assets + "images/layout/menu.png";
    const logoWhite = assets + "images/layout/logo-w.svg";
    const logoBlack = assets + "images/layout/logo-b.svg";
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
        if (menuOpen === false) {
            menuOpen = true;
        } else {
            menuOpen = false;
        }
	};
    const closeMenuOnClick = () => {
        menuOpen = false;
    };
    $: navClass = menuOpen === true ? "open" : "close";
</script>
<div>
    <a sveltekit:prefetch href="/" class="logo-link" title="FunctionLand" on:click={closeMenuOnClick}>
        <picture>
            <source media="(prefers-color-scheme: dark)" sveltekit:prefetch srcset={logoWhite}>
            <source media="(prefers-color-scheme: light)" sveltekit:prefetch srcset={logoBlack}>
            <img src={logoBlack} alt="FunctionLand" class="logo">
        </picture>
    </a>
    <button on:click={menuToggleClickAction} class="toggle-menu">
        <img src={menuIcon} alt="Menu"/>
    </button>
</div>
<nav class={navClass}>
    <ul>
        {#each navItems as navItem}
            <li class:active={$page.url.pathname === navItem.path}>
                <a sveltekit:prefetch href={navItem.path} on:click={closeMenuOnClick}>{navItem.text}</a>
            </li>
        {/each}
    </ul>
    <div class="btn btn-cta">
        <a sveltekit:prefetch href={ctaItem.path} on:click={closeMenuOnClick}>{ctaItem.text}</a>
    </div>
</nav>
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

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li::before {
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		bottom: 0;
		border-bottom: 2px solid transparent;
		left: 13px;
		transition: border-bottom-color 0.2s ease-in-out, width 0.2s ease-in-out, left 0.2s ease-in-out;
		transform-origin: 50% 50%;
	}

	li.active::before {
		width: 50%;
		left: calc(100% - 13px - 50%);
		border-bottom-color: var(--active-menu-border-color);
	}

	li:not(.active):hover::before {
		width: 50%;
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

	li a:hover {
		color: var(--menu-item-hover-color);
	}


    nav {
        display: flex;
        justify-content: center;
    }
    @media (max-width: 767px) {
        div {
            height: 60px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: center;
            background: var(--header-bg);
            z-index: 1;
            position: relative;
            padding: 0 15px;
        }
        nav {
            position: absolute;
            top: calc((100vh - 60px) * -1);
            /* height: calc(100vh - 60px); */
            background: var(--header-bg);
            width: 100%;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            height: calc(100vh - 60px);
            transition: top 0.3s ease-in-out, opacity 0.3s ease-in-out;
            z-index: -1;
        }
        nav.open {
            opacity: 1;
            top: 60px;
        }
    }
</style>
