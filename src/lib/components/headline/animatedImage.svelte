<script>
	import { inview } from 'svelte-inview';
    export let image;
    $: ratio = image.size === 'small' ? 390 : 1530;
	const animated = {
		inview: false,
		options: {
			threshold: 0.01,
			unobserveOnEnter: false
		},
		scrollDirection: '',
		change:({ detail }) => {
			animated.inview = detail.inView;
			animated.scrollDirection = detail.scrollDirection.vertical;
		},
	}
</script>

{#if image.size == 'small'}
    <div use:inview={animated.options} on:change={animated.change}
        class={`image-box ${image.ref}`}
        style={`aspect-ratio: ${image.photo.srcset.small.width}/${
            image.photo.srcset.small.height
        }; width: ${(image.photo.srcset.small.width / 390) * 100}%`}
    >
		<div class="image-transformer">
			<div class="image-wrapper"
				class:animate={animated.inview}
				class:animateFromBottom={animated.scrollDirection === 'down'}
				class:animateFromTop={animated.scrollDirection !== 'down'}>
				<img
					src={image.photo.srcset.small.src}
					alt=""
					class={`${
						image.ref != 'plug-n-play' ? image.position % 2 == 0 ? 'vibrate-1-3s' : 'vibrate-1-6s' : ''
					} ${image.ref}`}
					width={image.photo.srcset[image.size].width}
					height={image.photo.srcset[image.size].height}
					loading="lazy"
					decoding="async"
				/>
			</div>
		</div>
    </div>
{:else}

    <div use:inview={animated.options} on:change={animated.change}
        class={`image-box ${image.ref}`}
        style={`aspect-ratio: ${image.photo.srcset.large.width}/${
            image.photo.srcset.large.height
        }; width: ${(image.photo.srcset.large.width / 1530) * 100}%`}>
		
		{#if image.ref == 'apps-without-ads'}
			<div class="image-transformer"
				data-range={`${parseInt(image.photo.srcset.large.width/20)},${parseInt(image.photo.srcset.large.height/20)}`}
				class:transforminview={animated.inview}>
				<div class="image-wrapper"
					class:animate={animated.inview}
					class:animateFromBottom={animated.scrollDirection === 'down'}
					class:animateFromTop={animated.scrollDirection !== 'down'}
					style="transition-delay:{`${image.position%2 === 0 ? '0.6s' : '0.7s'}`}">
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
			</div>
		{:else}
			<div class="image-wrapper"
				class:animate={animated.inview}
				class:animateFromBottom={animated.scrollDirection === 'down'}
				class:animateFromTop={animated.scrollDirection !== 'down'}
				style="transition-delay:{`${image.position%2 === 0 ? '0.6s' : '0.7s'}`}">
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
    </div>
{/if}
<style>
    .image-wrapper {
		/* background: #e5e5e5; */
		transform: scale(0);
		width: 100%;
		height: 100%;
		-webkit-transform: scale(0);
		transform: scale(0);
		will-change: transform;
		transition: -webkit-transform .7s;
		transition: transform .7s;
		transition: transform .7s, -webkit-transform .7s;
		/* transition-delay: 0.7s; */
		overflow: hidden;
	}
	.image-transformer {
		will-change: transform;
		transition: -webkit-transform .8s;
		transition: transform .8s;
		transition: transform .8s, -webkit-transform .8s;
		/* transition-delay: 0.7s; */
	}
	.image-wrapper.animateFromTop {
		-webkit-transform: scale(1);
		transform: scale(1);
	}
	.image-wrapper.animateFromBottom {
		opacity: 0;
		-webkit-transform: scale(0);
		transform: scale(0);
	}
	.image-wrapper.animate {
		transition: -webkit-transform .7s, opacity .4s;
		transition: transform .7s cubic-bezier(0.49, 0.45, 0.47, 1.24), opacity .4s;
		transition: transform .7s cubic-bezier(0.49, 0.45, 0.47, 1.24), -webkit-transform .7s cubic-bezier(0.49, 0.45, 0.47, 1.24), opacity .4s;
		opacity: 1;
		-webkit-transform: scale(1);
		transform: scale(1);
	}
	div.image-box {
		position: absolute;
	}
	div.image-box img {
		height: 100%;
		width: 100%;
		border-radius: 20px;
		display: block;
	}
	div.image-box:nth-child(1) {
		position: absolute;
		top: 0;
		left: 12.9%;
		z-index: 1;
	}
	div.image-box:nth-child(2) {
		position: absolute;
		top: 10.17%;
		left: 3.6%;
		z-index: 0;
	}
	div.image-box:nth-child(3) {
		position: absolute;
		top: 32.69%;
		right: 6.4%;
		z-index: 0;
	}
	div.image-box:nth-child(4) {
		position: absolute;
		top: 55.37%;
		left: 3.5%;
		z-index: 0;
	}
	div.image-box:nth-child(5) {
		position: absolute;
		bottom: 0;
		left: 15.6%;
		z-index: 0;
	}
    
	@media (min-width: 960px) {
		div.image-box.design,
		div.image-box.design:nth-child(1),
		div.image-box.design:nth-child(2),
		div.image-box.design:nth-child(3),
		div.image-box.design:nth-child(4),
		div.image-box.design:nth-child(5),
		div.image-box.design img {
			position: unset;
			top: unset;
			left: unset;
			right: unset;
			bottom: unset;
		}
		div.image-box:not(.design) img {
			height: unset;
			width: 100%;
			border-radius: 20px;
		}

		div.image-box:not(.design):nth-child(1) {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
		}
		div.image-box:not(.design):nth-child(2) {
			position: absolute;
			top: 17.42%;
			left: 3.6%;
			z-index: 0;
		}
		div.image-box:not(.design):nth-child(3) {
			position: absolute;
			top: 0;
			left: unset;
			right: 0;
			z-index: 0;
		}
		div.image-box:not(.design):nth-child(4) {
			position: absolute;
			top: unset;
			left: 0;
			z-index: 0;
			bottom: 2.66%;
		}
		div.image-box:not(.design):nth-child(5) {
			position: absolute;
			bottom: 0;
			right: 0;
			left: unset;
			top: unset;
			z-index: 0;
		}
        
		div.image-box.design:nth-child(n),
		div.image-box.design:nth-child(n) img {
			aspect-ratio: unset !important;
			width: 100% !important;
			height: 100% !important;
		}
		div.image-box.design:nth-child(1) {
			grid-row: 1/2;
			grid-column: 1/3;
		}
		div.image-box.design:nth-child(1) .image-wrapper {
			animation-delay: 0.3s;
		}
		div.image-box.design:nth-child(2) {
			grid-row: 1/2;
			grid-column: 3/5;
		}
		div.image-box.design:nth-child(2) .image-wrapper {
			animation-delay: 0.3s;
		}
		div.image-box.design:nth-child(3) {
			grid-row: 1/3;
			grid-column: 5/6;
		}
		div.image-box.design:nth-child(3) .image-wrapper {
			animation-delay: 0.3s;
		}
		div.image-box.design:nth-child(4) {
			grid-row: 2/3;
			grid-column: 1/2;
		}
		div.image-box.design:nth-child(4) .image-wrapper {
			animation-delay: 0.2s;
		}
		div.image-box.design:nth-child(5) {
			grid-row: 2/3;
			grid-column: 2/4;
		}
		div.image-box.design:nth-child(5) .image-wrapper {
			animation-delay: 0.2s;
		}
		div.image-box.design:nth-child(6) {
			grid-row: 2/3;
			grid-column: 4/5;
		}
		div.image-box.design:nth-child(6) .image-wrapper {
			animation-delay: 0.2s;
		}
		div.image-box.design:nth-child(7) {
			grid-row: 3/4;
			grid-column: 1/4;
		}
		div.image-box.design:nth-child(7) .image-wrapper {
			animation-delay: 0.2s;
		}
		div.image-box.design:nth-child(8) {
			grid-row: 3/4;
			grid-column: 4/6;
		}
		div.image-box.design:nth-child(8) .image-wrapper {
			animation-delay: 0.2s;
		}
    }
</style>