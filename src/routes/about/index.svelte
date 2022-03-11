<script context="module">
	export const hydrate = true;
	export const prerender = true;
</script>

<script>
	import { data as about } from '$lib/components/data-mocks/about-page.svelte';
	import Heading from '$lib/components/page-blocks/heading.svelte';
	import Intro from '$lib/components/page-blocks/intro.svelte';
	import Team from '$lib/components/page-blocks/team.svelte';
	import People from '$lib/components/page-blocks/people.svelte';
	import Partners from '$lib/components/page-blocks/partners.svelte';
	import Photos from '$lib/components/page-blocks/photos.svelte';
	import Jobs from '$lib/components/page-blocks/jobs.svelte';
</script>

<svelte:head>
	<title>About Us</title>
</svelte:head>
<Heading title={about.page.heading.title} description={about.page.heading.description} />
<Intro title={about.page.intro.title} description={about.page.intro.description} />
<Team data={about.team} />
<People data={about.advisors} />
<Partners data={about.partners} />
<Photos data={about.memories} />
<Jobs data={about.jobs} />
