<script>
    export let data;
    export let innerWidth;
</script>
<div class="wrapper grid">
    {#each data.photos as photo}
        {#if innerWidth < 960}
            <!-- <div class="image-box" style={`aspect-ratio: ${photo.srcset.small.width}/${photo.srcset.small.height}; width: ${(photo.srcset.small.width / 390) * 100}%`}> -->
            <div
                class="image-box"
                style={`aspect-ratio: ${photo.srcset.small.width}/${photo.srcset.small.height};`}
            >
                <img
                    src={photo.srcset.small.src}
                    alt=""
                    width={photo.srcset.small.width}
                    height={photo.srcset.small.height}
                    loading="lazy"
                    decoding="async"
                />
            </div>
        {:else}
            <div
                class={`image-box ${data.ref}`}
                style={`aspect-ratio: ${photo.srcset.large.width}/${
                    photo.srcset.large.height
                }; width: ${(photo.srcset.large.width / 1530) * 100}%`}
            >
                <!-- <div class={`image-box ${data.ref}`} style={`aspect-ratio: ${photo.srcset.large.width}/${photo.srcset.large.height};`} > -->
                <img
                    src={photo.srcset.large.src}
                    alt=""
                    class={data.ref}
                    width={photo.srcset.large.width}
                    height={photo.srcset.large.height}
                    loading="lazy"
                    decoding="async"
                />
            </div>
        {/if}
    {/each}
</div>

<style>

	.grid {
		display: grid;
		grid-auto-flow: row;
		gap: 1rem;
	}
	.image-box {
		width: 100%;
		height: auto;
	}
	img {
		height: auto;
		width: 100%;
	}

	@media (min-width: 960px) {
		.grid {
			aspect-ratio: 1325/1509;
			max-width: 1324px;
			margin: 0 auto;
			width: 100%;
			height: auto;
			grid-auto-flow: column;
			grid-template-columns: 14.04833836858006% 18.58006042296073% 0.7552870090634441% 15.25679758308157% 17.59818731117825% 27.49244712990937%;
			grid-template-rows: 19.08548707753479% 18.29025844930417% 30.28495692511597% 28.56196156394964%;
		}
		.grid .image-box:nth-child(n) {
			background: gray;
		}
		.grid .image-box:nth-child(n),
		.grid .image-box:nth-child(n) img {
			aspect-ratio: unset !important;
			width: 100% !important;
			height: 100% !important;
			border-radius: 20px;
			overflow: hidden;
		}
		.grid .image-box:nth-child(1) {
			grid-row: 1/2;
			grid-column: 1/4;
		}
		.grid .image-box:nth-child(2) {
			grid-row: 1/2;
			grid-column: 4/6;
		}
		.grid .image-box:nth-child(3) {
			grid-row: 1/3;
			grid-column: 6/7;
		}
		.grid .image-box:nth-child(4) {
			grid-row: 2/3;
			grid-column: 1/2;
		}
		.grid .image-box:nth-child(5) {
			grid-row: 2/3;
			grid-column: 2/5;
		}
		.grid .image-box:nth-child(6) {
			grid-row: 2/3;
			grid-column: 5/6;
		}
		.grid .image-box:nth-child(7) {
			grid-row: 3/4;
			grid-column: 1/5;
		}
		.grid .image-box:nth-child(8) {
			grid-row: 3/4;
			grid-column: 5/7;
		}
		.grid .image-box:nth-child(9) {
			grid-row: 4/5;
			grid-column: 1/3;
		}
		.grid .image-box:nth-child(10) {
			grid-row: 4/5;
			grid-column: 3/7;
		}
	}
	@media (max-width: 959px) {
		.image-box {
			aspect-ratio: unset !important;
		}
	}
</style>