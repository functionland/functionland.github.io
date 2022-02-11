<script>
	import { page } from '$app/stores';
	export const navItems = [
        {
            path: "/privacy",
            text: "Privacy Policy"
        },
        {
            path: "/terms",
            text: "Terms and Conditions"
        },
        {
            path: "/referral-guidelines",
            text: "Referral Guidelines"
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