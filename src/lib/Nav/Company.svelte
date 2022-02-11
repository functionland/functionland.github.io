<script>
	import { page } from '$app/stores';
	export const navItems = [
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
    ];
</script>
<ul>
    {#each navItems as navItem}
        <li class:active={$page.url.pathname === navItem.path}>
            <a sveltekit:prefetch href={navItem.path}>{navItem.text}</a>
        </li>
    {/each}
</ul>
<style>
</style>