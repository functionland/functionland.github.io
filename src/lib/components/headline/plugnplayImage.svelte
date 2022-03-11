<script>
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	const pnpImage = {
		inview: false,
		options: {
			threshold: 0.01,
			unobserveOnEnter: false
		},
		scrollDirection: '',
		change:({ detail }) => {
			pnpImage.inview = detail.inView;
			pnpImage.scrollDirection = detail.scrollDirection.vertical;
		},
	}
    const fadeIn = {
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
    };
    export let image;
</script>
{#if image.size == 'small'}
    <div use:inview={pnpImage.options} on:change={pnpImage.change}
        class={`image-box ${image.ref}`}
        style={`aspect-ratio: ${image.photo.srcset.small.width}/${
            image.photo.srcset.small.height
        }; width: ${(image.photo.srcset.small.width / 390) * 100}%`}>
        {#if pnpImage.inview}
            <img
                in:fade={(image.scrollDirection !== 'down') ? fadeIn.reveal[3] : fadeIn.none}
                src={image.photo.srcset.small.src}
                alt=""
                class={image.ref}
                width={image.photo.srcset.small.width}
                height={image.photo.srcset.small.height}
                loading="lazy"
                decoding="async"
            />
        {:else}
            <img
                src={image.photo.srcset.small.src}
                alt=""
                class="hidden {image.ref}"
                width={image.photo.srcset.small.width}
                height={image.photo.srcset.small.height}
                loading="lazy"
                decoding="async"
            />
        {/if}
    </div>
{:else}
    <div
        class={`image-box ${image.ref}`}
        class:animate={image.parent.inview}
        class:animateFromBottom={image.parent.scrollDirection === 'down'}
        class:animateFromTop={image.parent.scrollDirection !== 'down'}>
        <img
            src={image.photo.srcset.large.src}
            alt=""
            class={image.ref}
            width={image.photo.srcset.large.width}
            height={image.photo.srcset.large.height}
            loading="lazy"
            decoding="async"
        />
    </div>
{/if}

<style>
    .hidden {
        opacity: 0;
    }
    @media (min-width: 960px) {
		.image-box {
			position: absolute;
			right: 0;
			z-index: 1;
			top: 0;
			transform-origin: center;
			height: 100%;
			width: 100%;
			overflow: hidden;
            border-radius: 20px;
            overflow: hidden;
		}
		.image-box.animateFromTop {
			-webkit-animation: expand-to-left 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation: expand-to-left 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation-delay: 0.2s;
		}
		.image-box.animateFromBottom {
			-webkit-animation: expand-to-left 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation: expand-to-left 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation-delay: 0.2s;
		}
		.image-box.animate {
			-webkit-animation: collapse-from-left 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation: collapse-from-left 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;
			animation-delay: 0.2s;
		}
		.image-box img {
			width: auto;
			max-width: unset;
			height: 100%;
			max-width: unset;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
            border-radius: 20px;
            overflow: hidden;
		}
    }
</style>