<script>
    import { assets } from '$app/paths';
    const socials = [
        {
            icon: assets + 'images/social/discord.svg',
            link: 'https://discord.gg/k9UybUBdBB',
            alt: 'FunctionLand on Discord'
        },
        {
            icon: assets + 'images/social/twitter.svg',
            link: 'https://twitter.com/functionland',
            alt: 'FunctionLand on Twitter'
        },
        {
            icon: assets + 'images/social/github.svg',
            link: 'https://github.com/functionland',
            alt: 'FunctionLand on GitHub'
        },
        {
            icon: assets + 'images/social/facebook.svg',
            link: 'https://www.facebook.com/functionland',
            alt: 'FunctionLand on Facebook'
        },
        {
            icon: assets + 'images/social/instagram.svg',
            link: 'https://www.instagram.com/functionland',
            alt: 'FunctionLand on Instagram'
        },
        {
            icon: assets + 'images/social/linkedin.svg',
            link: 'https://www.linkedin.com/company/functionland',
            alt: 'FunctionLand on LinkedIn'
        },
        // {
        //     icon: assets + 'images/social/telegram.svg',
        //     link: 'https://t.me/functionland',
        //     alt: 'FunctionLand on Telegram'
        // }
    ];
</script>
<ul>
	{#each socials as social}
        <li>
            <a target="_blank" href={social.link}>
                <img src={social.icon} alt={social.alt}>
            </a>
        </li>
    {/each}
</ul>
<style>
</style>