<script context="module">
	export const prerender = true;
</script>
<script>
    import NavMaker from '$lib/components/navs/footer/NavMaker.svelte';
    const company = {
        title: 'Company',
        items: [
            {
                path: "/about",
                text: "About Us"
            },
            {
                path: "/contact",
                text: "Contact Us"
            },
            {
                path: "/nft",
                text: "NFT"
            }
        ]
    };
    const help = {
        title: 'Get Help',
        items: [
            {
                path: "/faq",
                text: "Frequently Asked Questions"
            },
            {
                path: "/support",
                text: "Support"
            },
            {
                path: "/wishlist",
                text: "Wishlist"
            }
        ]
    };
    const resources = {
        title: 'Resources',
        items: [
            {
                path: "/whitepaper",
                text: "Whitepaper"
            },
            {
                path: "/branding-guidelines",
                text: "Branding Guidelines"
            },
            {
                path: "/fula-protocol",
                text: "FULA Protocol"
            }
        ]
    };
</script>
<div>
    <nav>
        <NavMaker {...company} />
    </nav>
    <nav>
        <NavMaker {...resources} />
    </nav>
    <nav>
        <NavMaker {...help} />
    </nav>
</div>
<style>
    div {
        --padding: 7px 15px 13px;
        --gap: 1rem;
        --columns: 1fr 1fr;
        --rows: 1fr 1fr;
        display: grid;
        grid-template-columns: var(--columns);
        grid-template-rows: var(--rows);
        padding: var(--padding);
        row-gap: var(--gap);
    }
    nav:nth-child(3) {
        --column: 1 / 3;
        grid-column: var(--column);
    }
    @media (min-width: 960px) {
        div {
            --padding: 0;
            --columns: 1fr 1fr 1fr;
            --rows: 1fr;
            align-items: center;
        }
        nav:nth-child(3) {
            --column: 3;
        }
    }
</style>