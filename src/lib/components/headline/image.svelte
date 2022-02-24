<script>
	import { scrollY, innerWidth } from 'svelte-window-stores/viewport';
	import { inview } from 'svelte-inview';
    export let photo;
    export let position;
    export let ref;
	const image = {
		inview: false,
		options: {
			threshold: 0.01,
			unobserveOnEnter: false
		},
		scrollDirection: '',
		fadeIn: {
			reveal: [
				{ duration: 400, delay: 300 },
				{ duration: 400, delay: 600 },
				{ duration: 400, delay: 900 },
				{ duration: 400, delay: 1200 },
				{ duration: 400, delay: 1400 },
				{ duration: 400, delay: 1600 },
				{ duration: 400, delay: 1800 },
				{ duration: 400, delay: 1800 },
			],
			none: { duration: 0, delay: 0 }
		},
		change:({ detail }) => {
			descView.inview = detail.inView;
			descView.scrollDirection = detail.scrollDirection.vertical;
		},
	}
</script>
{#if $innerWidth >= 960}
    {#if ref == 'plug-n-play'}
        <div
            class={`image-box ${ref}`}
        >
            <!-- class:animate={isInView}
            class:animateFromBottom={scrollDirection === 'down'}
            class:animateFromTop={scrollDirection !== 'down'} -->
            <img
                src={photo.srcset.large.src}
                alt=""
                class={ref}
                width={photo.srcset.large.width}
                height={photo.srcset.large.height}
                loading="lazy"
                decoding="async"
            />
        </div>
    {:else}
        <div
            class={`image-box ${ref}`}
            style={`aspect-ratio: ${photo.srcset.large.width}/${photo.srcset.large.height}; width: ${
                (photo.srcset.large.width / 1530) * 100
            }%`}
        >
            <!-- on:mouseleave={removeAnimateOnHover}
            on:mouseenter={addAnimateOnHover}
            on:click={enlarge} -->
            <img
                src={photo.srcset.large.src}
                alt=""
                class={ref}
                width={photo.srcset.large.width}
                height={photo.srcset.large.height}
                loading="lazy"
                decoding="async"
            />
        </div>
    {/if}
{:else}
    
{/if}
{#if innerWidth < 960}
				{#if index <= 4}
					<div
						class={`image-box ${data.ref}`}
						style={`aspect-ratio: ${photo.srcset.small.width}/${
							photo.srcset.small.height
						}; width: ${(photo.srcset.small.width / 390) * 100}%`}
					>
						<img
							src={photo.srcset.small.src}
							alt=""
							class={`${
								index % 2 == 0 && data.ref != 'plug-n-play' ? 'vibrate-1-3s' : 'vibrate-1-6s'
							} ${data.ref}`}
							width={photo.srcset.small.width}
							height={photo.srcset.small.height}
							loading="lazy"
							decoding="async"
						/>
					</div>
				{/if}
			{:else if data.ref == 'plug-n-play'}
				{#if index <= 4}
					<div
						class={`image-box ${data.ref}`}
						class:animate={isInView}
						class:animateFromBottom={scrollDirection === 'down'}
						class:animateFromTop={scrollDirection !== 'down'}
					>
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
			{:else}
				<div
					class={`image-box ${data.ref}`}
					style={`aspect-ratio: ${photo.srcset.large.width}/${photo.srcset.large.height}; width: ${
						(photo.srcset.large.width / 1530) * 100
					}%`}
					on:mouseleave={removeAnimateOnHover}
					on:mouseenter={addAnimateOnHover}
					on:click={enlarge}
				>
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