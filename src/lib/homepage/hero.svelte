<script context="module">
	export const prerender = true;
	export const hydrate = true;
</script>

<script>
	// import { scrollRef } from 'svelte-scrolling';
	import { innerWidth, innerHeight } from 'svelte-window-stores/viewport';
	import { fade } from 'svelte/transition';
	import { assets } from '$app/paths';
    import { inview } from 'svelte-inview';
	const heroImageDesktop = assets + 'images/home/hero-image-desktop.png';
	const heroImageMobile = assets + 'images/home/hero-image-mobile.jpg';

    let imageIsInView, heroIsInView, scrollDirection;
    const handleChangeImageIsInView = ({ detail }) => {
        imageIsInView = detail.inView;
        scrollDirection = detail.scrollDirection.vertical;
    };
</script>
<section>
	<div class="container">
		<div class="wrapper">
			<h1 class="hero">
			{#if $innerWidth > 960}
				{#if imageIsInView}
				<span>
					<span class="bold" 
						in:fade={{duration: 400, delay: 300}} out:fade>Box </span>
						<span in:fade={{duration: 400, delay: 600}} out:fade>by </span>
						<span class="teal-text" in:fade={{duration: 400, delay: 900}} out:fade>Functionland </span>
				</span>
				<span in:fade={{duration: 400, delay: 1300}} out:fade>The Private, </span>
				<span in:fade={{duration: 400, delay: 1500}} out:fade>Payless, </span>
				<span in:fade={{duration: 400, delay: 1700}} out:fade>Cloud Storage </span>
				<span in:fade={{duration: 400, delay: 1900}} out:fade>Alternative</span>
				{/if}
			{:else}
				<span>
					<span class="bold">Box </span>
						<span>by </span>
						<span class="teal-text">Functionland </span>
				</span>
				<span>The Private, </span>
				<span>Payless, </span>
				<span>Cloud Storage </span>
				<span>Alternative</span>
			{/if}
			</h1>
			<div class="hero-image-wrapper" use:inview on:change={handleChangeImageIsInView}>
				<picture id="hero" 
					class:scale-in={imageIsInView}
					class:scale-out-FromTop={scrollDirection === 'down'}
					class:scale-out-FromBottom={scrollDirection !== 'down'}>
					<source srcset={heroImageDesktop} media="(min-width: 960px)" />
					<img src={heroImageMobile} alt=""
					class:size-in={imageIsInView}
					class:size-out-FromBottom={scrollDirection === 'down'}
					class:size-out-FromTop={scrollDirection !== 'down'}/>
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
	}
	h1 > span {
		display: block;
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
			height: 100vw;
			width: auto;
			max-width: unset;
		}


        .scale-out-FromTop {
            -webkit-animation: scale-out 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: scale-out 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.2s;

        }
        .scale-out-FromBottom {
            -webkit-animation: scale-out 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: scale-out 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.2s;
        }
        .scale-in {
            -webkit-animation: scale-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: scale-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.2s;
        }

        .size-out-FromTop {
            -webkit-animation: size-out 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: size-out 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.2s;

        }
        .size-out-FromBottom {
            -webkit-animation: size-out 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: size-out 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.2s;
        }
        .size-in {
            -webkit-animation: size-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation: size-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
            animation-delay: 0.2s;
        }
	}
</style>
