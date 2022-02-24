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
		d="M301.28,329.28h28v-28h-14v14h-14Z"
	/><path d="M213.92,315.28H246.4v14H213.92Z" /><path d="M257.6,315.28h32.48v14H257.6Z" /><path
		d="M203.28,315.28h-14v-14h-14v28h28Z"
	/><path d="M175.28,213.92h14V246.4h-14Z" /><path d="M175.28,257.6h14v32.48h-14Z" /><path
		d="M189.28,189.28h14v-14h-28v28h14Z"
	/><path d="M213.92,175.28H246.4v14H213.92Z" /><path d="M257.6,175.28h32.48v14H257.6Z" /><path
		d="M329.28,175.28h-28v14h14v14h14Z"
	/><path d="M315.28,257.6h14v32.48h-14Z" /><path d="M315.28,213.92h14V246.4h-14Z" /></svg
>

<style>
	svg {
		max-width: 100%;
		height: auto;
		display: block;
		fill: var(--svg-soc-fill);
		transition: fill 0.2s ease-in-out;
	}
</style>
