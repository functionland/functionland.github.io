<script context="module">
	export const hydrate = true;
	export const prerender = true;
</script>
<script>
	import { data as about} from '$lib/components/data-mocks/about-page.svelte';
	import Heading from '$lib/components/page-blocks/heading.svelte';
	import Intro from '$lib/components/page-blocks/intro.svelte';
	import Team from '$lib/components/page-blocks/team.svelte';
</script>
<svelte:head>
	<title>About Us</title>
</svelte:head>
<Heading title={about.page.heading.title} description={about.page.heading.description} />
<Intro title={about.page.intro.title} description={about.page.intro.description} />
<Team data={about.team} />
