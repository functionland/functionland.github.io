<svelte:options namespace="svg" />

<script>
	export let width;
	export let height;
</script>

<svg {width} {height} viewBox="0 0 311.4 350.17" class="logo-black"
	><rect width="311.4" height="350" fill="none" /><rect
		x="0.08"
		y="0.26"
		width="311.32"
		height="349.91"
		fill="none"
	/><polygon
		points="5.14 198.72 62.66 198.72 62.66 344.21 5.14 293.32 5.14 198.72"
		fill="#1a1a1a"
	/><polygon points="152.65 8 152.65 87.4 210.13 87.4 210.13 70.81 152.65 8" fill="#1a1a1a" /><rect
		x="95"
		y="225.15"
		width="119.66"
		height="39.74"
		transform="translate(-127.91 181.24) rotate(-45)"
		fill="#306767"
	/><rect
		x="134.96"
		y="185.19"
		width="39.74"
		height="119.66"
		transform="translate(-127.91 181.24) rotate(-45)"
		fill="#306767"
	/><rect x="62.64" y="8" width="90" height="57.49" fill="#383838" /><polygon
		points="5.14 70.81 5.14 193.44 5.14 198.72 62.66 198.72 62.66 140.82 62.66 8.02 5.14 70.81"
		fill="#1a1a1a"
	/><rect x="5.14" y="196.73" width="57.51" height="96.59" fill="#099393" /><polygon
		points="5.16 196.72 86.44 196.72 86.44 145.83 62.64 145.83 5.16 196.72"
		fill="#306767"
	/><polygon
		points="5.16 293.32 86.44 293.32 86.44 344.21 62.66 344.21 5.16 293.32"
		fill="#306767"
	/><rect x="247.01" y="196.72" width="57.49" height="96.6" fill="#099393" /><polygon
		points="304.5 293.32 225.1 293.32 225.1 344.21 248.9 344.21 304.5 293.32"
		fill="#306767"
	/><polygon
		points="304.5 196.72 225.1 196.72 225.1 145.83 248.9 145.83 304.5 196.72"
		fill="#306767"
	/></svg
>

<style>
	.logo-black {
		opacity: 1;
		grid-row: 1/-1;
		grid-column: 1/-1;
	}
	@media (prefers-color-scheme: dark) {
		.logo-black {
			opacity: 0;
		}
	}
</style>
