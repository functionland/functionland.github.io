<script>
	import { scrollY, innerWidth } from 'svelte-window-stores/viewport';
	import { fade } from 'svelte/transition';
	import { assets } from '$app/paths';
	import { inview } from 'svelte-inview';
	let isMobile = $innerWidth < 960;
	const title = {
		inview: false,
		options: {
			threshold: 0.1,
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
			title.inview = detail.inView;
			title.scrollDirection = detail.scrollDirection.vertical;
		},
	}
	const image = {
		src : {
			desktop: assets + 'images/home/hero-image-desktop.png',
			mobile: assets + 'images/home/hero-image-mobile.jpg',
		},
		options: {
			threshold: [0.5, 1],
			unobserveOnEnter: false
		},
		inview: false,
		scrollDirection: '',
		change:({ detail }) => {
			image.inview = detail.inView;
			image.scrollDirection = detail.scrollDirection.vertical;
		},
		init:({detail}) => {
			image.posY = window.pageYOffset + detail.node.getBoundingClientRect().y;
		},
	}
</script>

<svelte:head>
	<link rel="preload" href={image.src.desktop} media="(min-width: 960px)" as="image" />
	<link rel="preload" href={image.src.mobile} media="(max-width: 959px)" as="image" />
</svelte:head>
<section>
	<div class="container">
		<div class="wrapper">
			<h1 class="hero" use:inview={title.options} on:change={title.change}>
				{#if title.inview}
					<span>
						<span class="bold"
							in:fade={(title.scrollDirection !== 'down') ? title.fadeIn.reveal[0] : title.fadeIn.none}
						>Box </span>
						<span
							in:fade={(title.scrollDirection !== 'down') ? title.fadeIn.reveal[1] : title.fadeIn.none}
						>by </span>
						<span class="teal-text"
							in:fade={(title.scrollDirection !== 'down') ? title.fadeIn.reveal[2] : title.fadeIn.none}
						>Functionland </span>
					</span>
					<span
						in:fade={(title.scrollDirection !== 'down') ? title.fadeIn.reveal[3] : title.fadeIn.none}
					>The Private, </span>
					<span
						in:fade={(title.scrollDirection !== 'down') ? title.fadeIn.reveal[4] : title.fadeIn.none}
					>Payless, </span>
					<span
						in:fade={(title.scrollDirection !== 'down') ? title.fadeIn.reveal[5] : title.fadeIn.none}
					>Cloud Storage </span>
					<span
						in:fade={(title.scrollDirection !== 'down') ? title.fadeIn.reveal[6] : title.fadeIn.none}
					>Alternative</span>
				{:else}
					<span class='hidden'>
						<span class="bold">Box </span>
						<span>by </span>
						<span class="teal-text">Functionland </span>
					</span>
					<span class='hidden'>The Private, </span>
					<span class='hidden'>Payless, </span>
					<span class='hidden'>Cloud Storage </span>
					<span class='hidden'>Alternative</span>
				{/if}
			</h1>
			{#if isMobile}
				<div class="hero-image-wrapper" use:inview={image.options} on:change={image.change}>
					<picture id="hero">
						<source srcset={image.src.desktop} media="(min-width: 960px)" />
						{#if image.inview}
							<img src={image.src.mobile} alt="" loading="eager"
								in:fade={(image.scrollDirection !== 'down') ? title.fadeIn.reveal[7] : title.fadeIn.none}
							/>
						{:else}
							<img src={image.src.mobile} alt="" loading="lazy" />
						{/if}
					</picture>
				</div>
			{:else}
				<div class="hero-image-wrapper" use:inview={image.options} on:change={image.change}>
					<picture id="hero"
						class:animate={image.inview}
						class:animateFromBottom={image.scrollDirection === 'down'}
						class:animateFromTop={image.scrollDirection !== 'down'}
						class:animateToBottom={image.scrollDirection === 'top'}
						class:animateToTop={image.scrollDirection !== 'top'}
					>
						<source srcset={image.src.desktop} media="(min-width: 960px)" />
						<img src={image.src.mobile} alt="" loading="eager"
							class:animate={image.inview}
							class:animateFromBottom={image.scrollDirection === 'down'}
							class:animateFromTop={image.scrollDirection !== 'down'}
							class:animateToBottom={image.scrollDirection === 'top'}
							class:animateToTop={image.scrollDirection !== 'top'}
							/>
					</picture>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.hidden {
		position: absolute;
		opacity: 0;
		user-select: none;
	}
	section {
		padding-bottom: 0;
	}
	.wrapper {
		padding: var(--hero-section-padding);
	}
	h1 {
		font-family: var(--montserrat);
		font-size: var(--hero-font-size);
		font-weight: var(--hero-font-weight);
		line-height: var(--hero-line-height);
		letter-spacing: var(--letter-spacing);
		margin: 0 auto;
		max-width: var(--hero-max-width);
		padding-bottom: var(--hero-padding-bottom);
		aspect-ratio: 266/319;
		width: 100%;
	}
	h1 > span {
		display: block;
	}
	img {
		width: 100%;
		display: block;
		border-radius: var(--hero-image-brdrds);
	}
	.hero-image-wrapper {
		aspect-ratio:1678/947;
		position: relative;
		width: 100%;
	}
	@media (max-width: 959px) {
		h1 {
			padding-bottom: 0;
		}
		.wrapper {
			padding: var(--hero-section-padding);
			height: 100%;
		}
	}

	@media (min-width: 960px) {
		h1 {
			text-align: var(--hero-text-align);
			aspect-ratio: 827 / 300;
		}
		h1 > span {
			display: inline-block;
		}
		h1 > span:nth-child(1) {
			display: block;
		}
		.hero-image-wrapper {
			aspect-ratio:1678/947;
			position: relative;
			width: 100%;
		}
		picture {
			aspect-ratio:1678/947;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			overflow: hidden;
			border-radius: var(--hero-image-brdrds);
		}
		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			transform-origin: center;
			aspect-ratio: 1678/947;
			width: auto;
			max-width: unset;
			margin: 0 auto;
			display: block;
			border-radius: var(--hero-image-brdrds);
		}

		picture.animate,
		picture.animateFromTop,
		picture.animateFromBottom,
		picture.animateToBottom,
		picture.animateToTop {
			height: 400px;
			width: 400px;
			animation-name: none;
		}
		picture.animate.animateFromTop {
			-webkit-animation: scale-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: scale-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
			animation-delay: 1s;
		}
		picture.animateToTop.animateFromTop:not(.animate),
		picture.animate.animateFromBottom:not(.animateFromTop) {
			height: 100%;
			width: 100%;
			animation-name: none;
		}


		picture img.animate,
		picture img.animateFromTop,
		picture img.animateFromBottom,
		picture img.animateToBottom,
		picture img.animateToTop {
			transform: translateX(-47%) translateY(-40%);
			height: calc((947 / 1678) * 100vw);
			animation-name: none;
		}
		picture img.animate.animateFromTop {
			-webkit-animation: size-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: size-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
			animation-delay: 1.3s;
		}
		picture img.animateToTop.animateFromTop:not(.animate),
		picture img.animate.animateFromBottom:not(.animateFromTop) {
			transform: translateX(-50%) translateY(-50%);
			height: 100%;
			animation-name: none;
		}
		/* .animate,
		.animateFromTop,
		.animateFromBottom,
		.animateToBottom,
		.animateToTop {
			animation-name: none;
		}
		.animate.animateFromBottom {
			animation-name: none;
		} */
		/* picture.animateFromTop {
            -webkit-animation: scale-in 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: scale-in 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.7s;

			
			transform: translateX(-47%) translateY(-40%);
			height: calc((947 / 1678) * 100vw);
		} */

		
		/* picture.animate,
		picture.animateFromTop,
		picture.animateFromBottom,
		picture.animateToBottom,
		picture.animateToTop {
			width: 400px;
			height: 400px;
			animation-name: none;
		}
		picture.animate.animateFromTop {
            -webkit-animation: scale-in 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: scale-in 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.7s;
		}
		picture.animate.animateToTop {
			width: 100%;
			height: 100%;
			animation-name: none;
		}
		picture img.animate,
		picture img.animateFromBottom,
		picture img.animateToBottom,
		picture img.animateToTop {
			transform: translateX(-47%) translateY(-40%);
			height: calc((947 / 1678) * 100vw);
			animation-name: none;
		} */
		/* picture img.animateFromTop {
			transform: translateX(-47%) translateY(-40%);
			height: calc((947 / 1678) * 100vw);
		} */
		/* picture img.animate.animateFromTop {
            -webkit-animation: size-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: size-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.6s;
		}
		picture img.animateFromBottom, picture img.animateFromTop {
			height: 100%;
			transform: translateX(-50%) translateY(-50%);
			animation-name: none;
		} */
	}
</style>
