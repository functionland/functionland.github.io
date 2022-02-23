<script>
	import { fade } from 'svelte/transition';
	import { assets } from '$app/paths';
    import { inview } from 'svelte-inview';
	const heroImageDesktop = assets + 'images/home/hero-image-desktop.png';
	const heroImageMobile = assets + 'images/home/hero-image-mobile.jpg';
	const imageOptions = {
		threshold: 0.5,
		rootmargin: "-5%",
		unobserveOnEnter: false,
	};
	const heroOptions = {
		threshold: 0.5,
		unobserveOnEnter: false,
	};
    let imageIsInView, heroIsInView, scrollDirection, innerWidth;
    const handleChangeImageIsInView = ({ detail }) => {
        imageIsInView = detail.inView;
        scrollDirection = detail.scrollDirection.vertical;
    };
	const handleChangeHeroIsInView = ({ detail }) => {
        heroIsInView = detail.inView;
        scrollDirection = detail.scrollDirection.vertical;
    };
</script>
<svelte:head>
	<link rel="preload" href={heroImageDesktop} media="(min-width: 960px)" as="image" />
	<link rel="preload" href={heroImageMobile} media="(max-width: 959px)" as="image" />
</svelte:head>
<svelte:window bind:innerWidth={innerWidth}/>
<section>
	<div class="container">
		<div class="wrapper">
			<h1 class="hero" use:inview={heroOptions} on:change={handleChangeHeroIsInView}>
				{#if heroIsInView}
					<span>
						<span class="bold" 
							in:fade={{duration: 400, delay: 300}} out:fade>Box </span>
							<span in:fade={{duration: 400, delay: 600}} out:fade>by </span>
							<span class="teal-text" in:fade={{duration: 400, delay: 1000}} out:fade>Functionland </span>
					</span>
					<span in:fade={{duration: 400, delay: 1500}} out:fade>The Private, </span>
					<span in:fade={{duration: 400, delay: 2000}} out:fade>Payless, </span>
					<span in:fade={{duration: 400, delay: 2500}} out:fade>Cloud Storage </span>
					<span in:fade={{duration: 400, delay: 3000}} out:fade>Alternative</span>
				{/if}
			</h1>
			<div class="hero-image-wrapper" use:inview={imageOptions} on:change={handleChangeImageIsInView}>
				<picture id="hero" 
					class:animate={imageIsInView}
					class:animateFromBottom={scrollDirection === 'down'}
					class:animateFromTop={scrollDirection !== 'down'}>
					<!-- class:scale-in={imageIsInView}
					class:scale-out-FromTop={scrollDirection === 'down'}
					class:scale-out-FromBottom={scrollDirection !== 'down'}> -->
					<source srcset={heroImageDesktop} media="(min-width: 960px)" />
					<img src={heroImageMobile} alt="" loading="eager"
					class:animate={imageIsInView}
					class:animateFromBottom={scrollDirection === 'down'}
					class:animateFromTop={scrollDirection !== 'down'}/>
				</picture>
			</div>
		</div>
	</div>
</section>
<style>
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

	.hero-image-wrapper {
		
    	clip: rect(0px, 969.875px, 857px, 327.125px);
	}
	img {
		width: 100%;
		display: block;
		border-radius: var(--hero-image-brdrds);
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
		img {
			margin: 0 auto;
			display: block;
			border-radius: var(--hero-image-brdrds);
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
			transform: translateX(-50%) translateY(-50%);
			width: 400px;
			height: 400px;
			overflow: hidden;
			border-radius: var(--hero-image-brdrds);
		}
		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-47%) translateY(-40%);
			transform-origin: center;
			aspect-ratio: 1678/947;
			height: var(--intro-height);
			width: auto;
			max-width: unset;
		}
        picture.animateFromTop {
            -webkit-animation: scale-out 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: scale-out 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.7s;

        }
        picture.animateFromBottom {
            -webkit-animation: scale-out 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: scale-out 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.7s;
        }
        picture.animate {
            -webkit-animation: scale-in 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: scale-in 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.7s;
        }
        picture img.animateFromTop {
            -webkit-animation: size-out 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: size-out 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.6s;

        }
        picture img.animateFromBottom {
            -webkit-animation: size-out 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: size-out 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.6s;
        }
        picture img.animate {
            -webkit-animation: size-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: size-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.6s;
        }
	}
</style>
