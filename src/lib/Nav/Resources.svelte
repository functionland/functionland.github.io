<script>
	import { page } from '$app/stores';
</script>
<ul>
    <li class="label">Resources</li>
    <li class:active={$page.url.pathname === '/whitepaper'}>
        <a sveltekit:prefetch href="/whitepaper">Whitepaper</a>
    </li>
    <li class:active={$page.url.pathname === '/branding-guidelines'}>
        <a sveltekit:prefetch href="/branding-guidelines">Branding Guidelines</a>
    </li>
    <li class:active={$page.url.pathname === '/fula-protocol'}>
        <a sveltekit:prefetch href="/fula-protocol">FULA Protocol</a>
    </li>
</ul>
<style>
</style>