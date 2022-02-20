<script>
	import Grid from '$lib/components/headline/grid.svelte';
	import Description from '$lib/components/headline/description.svelte';
	export let data;
	export let title;
</script>

<Grid {data} {title} />
<Description {data} />
