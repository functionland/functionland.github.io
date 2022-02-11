<script>
	import { page } from '$app/stores';
	export const navItems = [
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