<svelte:options namespace="svg" />

<script>
	export let width;
	export let height;
</script>

<svg {width} {height} viewBox="0 0 311.53 350.14" class="logo-white"
	><rect x="0.13" width="311.4" height="350" fill="none" /><rect
		width="311.53"
		height="350.14"
		fill="none"
	/><polygon
		points="5.07 198.59 62.62 198.59 62.62 344.18 5.07 293.26 5.07 198.59"
		fill="#1a1a1a"
	/><polygon points="152.67 7.74 152.67 87.2 210.2 87.2 210.2 70.6 152.67 7.74" fill="#fff" /><rect
		x="94.98"
		y="225.04"
		width="119.74"
		height="39.76"
		transform="translate(-127.83 181.23) rotate(-45)"
		fill="#306767"
	/><rect
		x="134.97"
		y="185.05"
		width="39.76"
		height="119.74"
		transform="translate(-127.83 181.23) rotate(-45)"
		fill="#306767"
	/><rect x="62.61" y="7.74" width="90.06" height="57.53" fill="#b2b2b2" /><rect
		x="247.1"
		y="196.59"
		width="57.53"
		height="96.66"
		fill="#099393"
	/><polygon
		points="304.63 293.25 225.17 293.25 225.17 344.18 248.99 344.18 304.63 293.25"
		fill="#306767"
	/><polygon
		points="304.63 196.59 225.17 196.59 225.17 145.67 248.99 145.67 304.63 196.59"
		fill="#306767"
	/><polygon
		points="5.07 70.6 5.07 193.3 5.07 198.59 62.62 198.59 62.62 140.65 62.62 7.76 5.07 70.6"
		fill="#fff"
	/><rect x="5.07" y="196.6" width="57.55" height="96.66" fill="#099393" /><polygon
		points="5.08 196.59 86.42 196.59 86.42 145.67 62.61 145.67 5.08 196.59"
		fill="#306767"
	/><polygon
		points="5.08 293.25 86.42 293.25 86.42 344.18 62.62 344.18 5.08 293.25"
		fill="#306767"
	/></svg
>

<style>
	.logo-white {
		opacity: 0;
		grid-row: 1/-1;
		grid-column: 1/-1;
	}
	@media (prefers-color-scheme: dark) {
		.logo-white {
			opacity: 1;
		}
	}
</style>
