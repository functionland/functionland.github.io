<script>
	import Image from '$lib/components/headline/image.svelte';
	import { innerWidth } from 'svelte-window-stores/viewport';
	import { inview } from 'svelte-inview';
	export let data;
	let isInView, scrollDirection;
	const options = {
		unobserveOnEnter: false
	};
	const handleChange = ({ detail }) => {
		isInView = detail.inView;
		scrollDirection = detail.scrollDirection.vertical;
	};
	let photos = data.photos ? (data.photos.length > 0 ? true : false) : false;
</script>
{#if photos}
	<div
		class={`photos  ${data.ref} ${
			$innerWidth > 960 && (data.ref != 'design' && data.ref != 'plug-n-play' ? 'de-contain' : '')
		}`}
		use:inview={options}
		on:change={handleChange}>
		{#each data.photos as photo, index}
			<Image data={ { photo, position: index, ref: data.ref, parent:{inview: isInView, scrollDirection: scrollDirection} } }/>
		{/each}
	</div>
{/if}
<style>
	div.photos:not(.plug-n-play) {
		position: relative;
		aspect-ratio: 390/939;
		width: 100%;
		display: block;
	}
	@media (min-width: 960px) {
		div.photos:not(.plug-n-play):not(.design) {
			aspect-ratio: 1529/1198.99;
			max-width: 90%;
			margin: 0 auto;
		}
		div.photos.design {
			aspect-ratio: 1188/1058;
		}
		.photos.plug-n-play {
			grid-row: 1 / -1;
			grid-column: 2 / 3;
			position: unset !important;
		}
		div.photos.design {
			aspect-ratio: 1055/1185;
			display: grid;
			grid-template-columns: 167px 245px 181px 209px 326px;
			grid-template-columns: 14.09282700421941% 20.67510548523207% 15.27426160337553% 17.63713080168776% 27.51054852320675%;
			grid-template-rows: 288px 276px 457px;
			grid-template-rows: 27.29857819905213% 26.16113744075829% 43.3175355450237%;
			gap: 12px;
			max-width: 1185px;
			width: 100%;
			height: auto;
		}
	}
</style>