<script context="module">
	export const prerender = true;
</script>
<script>
    import { assets } from '$app/paths';
    import Video from '$lib/components/video/video.svelte';
    const videos = {
        'mp4': assets + 'vides/intro.mp4',
        'webm': assets + 'vides/intro.webm'
    };
</script>
<section>
    <!-- <Video sources={videos} /> -->
</section>
<style>
    section {
        max-width: var(--max-width);
        height: calc(100vh - 60px);
        margin: 0 auto;
        background: var(--body-gradient);
    }
    @media (prefers-color-scheme: dark) {
        section {
            background: transparent;
        }
    }
</style>