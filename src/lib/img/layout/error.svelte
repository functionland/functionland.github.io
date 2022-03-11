<svelte:options namespace="svg" />

<script>
	export let width;
	export let height;
</script>

<svg {width} {height} viewBox="0 0 504 504"
	><path d="M175.28,0h154V154h-154Z" /><path d="M175.28,350h154V504h-154Z" /><path
		d="M350,175.28H504v154H350Z"
	/><path d="M350,0H504V154H350Z" /><path d="M350,350H504V504H350Z" /><path
		d="M0,175.28H154v154H0Z"
	/><path d="M0,0H154V154H0Z" /><path d="M0,350H154V504H0Z" /><path
		d="M222.32,321.44,252,291.76l29.68,29.68,39.76-39.76L291.76,252l29.68-29.68-39.76-39.76L252,212.24l-29.68-29.68-39.76,39.76L212.24,252l-29.68,29.68Zm-19.6-99.12,19.6-19.6L252,232.4l29.68-29.68,19.6,19.6L271.6,252l29.68,29.68-19.6,19.6L252,271.6l-29.68,29.68-19.6-19.6L232.4,252Z"
	/></svg
>

<style>
	svg {
		max-width: 100%;
		height: auto;
		display: block;
		fill: var(--err-svg-color);
		transition: fill 0.2s ease-in-out;
	}
</style>
