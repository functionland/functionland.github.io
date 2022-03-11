<script>
	import Grid from '$lib/components/headline/grid.svelte';
	import Description from '$lib/components/headline/description.svelte';
	export let data;
	export let title;
	export let presection;
</script>
<Grid {data} {title} {presection} />
<Description {data} />
