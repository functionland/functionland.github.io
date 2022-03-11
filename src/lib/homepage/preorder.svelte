<script>
	import throttle from 'just-throttle';
	import { innerWidth, innerHeight, scrollY } from 'svelte-window-stores/viewport';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { assets } from '$app/paths';
    import { onMount } from 'svelte';
	const preorder = {
		inview: false,
		options: {
			threshold: 0.01,
			unobserveOnEnter: false
		},
		scrollDirection: '',
		change:({ detail }) => {
			preorder.inview = detail.inView;
			preorder.scrollDirection = detail.scrollDirection.vertical;
		},
	};
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
	let src = assets + `videos/preorder.mp4`,
		poster = assets + `images/home/preorder-poster.jpg`,
		browserSupportText = 'Your browser does not support the video element.',
		frames = [],
		currentFrame = 0,
		totalFrames = 179,
		m = { x: 0, y: 0 },
		handleMousemove,
		ctaButtonRef,
		distance,
		parallax;
	for (let i = 0; i < totalFrames; i++) {
		frames.push(i);
	}
	let detectScroll
	if ($innerWidth >= 960) {
		onMount(()=>{
			handleMousemove = event => {
				if (preorder.inview) {
					m.x = event.pageX;
					m.y = event.pageY;

					function getDistance(elem) {
						var rect = elem.getBoundingClientRect();
						return Math.floor(Math.sqrt(Math.pow(m.x - ((window.pageXOffset + rect.left)+(rect.width/2)), 2) + Math.pow(m.y - ((window.pageYOffset + rect.top)+(rect.height/2)), 2)));
					}
					var distance =  getDistance(ctaButtonRef);
					var distanceToFrames = distance / ($innerWidth / totalFrames);
					var frame = totalFrames - Math.floor( ((( distanceToFrames / 100 ) * totalFrames ) / 100) * totalFrames );
					if (frame < 0) {
						currentFrame = 1;
					} else if (frame > totalFrames - 2) {
						currentFrame = totalFrames - 1;
					} else {
						currentFrame = frame;
					}
				}
			}
		});
	} else {
		currentFrame = 3;
	}
	$: onMount(()=>{
		let scroll = $scrollY;
		detectScroll = (event) => {
			if ( $innerWidth < 960 && preorder.inview == true ) {
				let framesToAdd = ((Math.round( (($scrollY / ($innerHeight / totalFrames)) / totalFrames) / ( (($innerHeight * 1.5) / totalFrames) / 100  )) * 100) / totalFrames) / 100;
				if ($scrollY > lastScroll) {
					let scrollDiff = $scrollY - lastScroll;
					let scrollDiffPercentage = scrollDiff / parallax.offsetHeight;
					// let framesToAdd = Math.round(scrollDiffPercentage * totalFrames);
					if (currentFrame < totalFrames&& currentFrame < totalFrames - 2) {
						// currentFrame = currentFrame + ( ((($scrollY / $innerHeight) / totalFrames) / ($innerHeight / 2.5) * (( ($scrollY / paralalax.offsetHeight) / totalFrames) / 10)) * ratio );
						// currentFrame =  currentFrame + (( (( ($scrollY / (window.pageYOffset + paralalax.offsetTop) ) * (window.pageYOffset + paralalax.offsetTop)) / totalFrames) / 100) * ratio );
						if (currentFrame + (framesToAdd * 3) > totalFrames) {
							currentFrame = totalFrames -1;
						} else {
							currentFrame = currentFrame + (framesToAdd * 2.3);
						}
					}
				} else {
					if (currentFrame > 2 && currentFrame < totalFrames + 2) {
						// currentFrame = currentFrame - ( ((($scrollY / $innerHeight) / totalFrames) / ($innerHeight / 2.5) * (( ($scrollY / paralalax.offsetHeight) / totalFrames) / 10)) * ratio );
						// currentFrame =  currentFrame - (( (( ($scrollY / (window.pageYOffset + paralalax.offsetTop) ) * (window.pageYOffset + paralalax.offsetTop)) / totalFrames) / 100) * ratio );
						if (currentFrame - (framesToAdd * 3) < 0) {
							currentFrame = 0;
						} else {
							currentFrame = currentFrame - (framesToAdd * 2.5);
						}
					}
				}
				lastScroll = $scrollY;
			}
		};
	});
</script>
<svelte:head>
	{#if preorder.inview}
		{#each frames as frame, index}
			<link rel="preload" as="image" href={assets + '/frames/preorder/pre-order_' + frame + '.jpeg'} type="image/jpeg">
		{/each}
	{:else}
		{#each frames as frame, index}
			{#if index < 30}
			<link rel="preload" as="image" href={assets + '/frames/preorder/pre-order_' + frame + '.jpeg'} type="image/jpeg">
			{/if}
		{/each}
	{/if}
</svelte:head>
<svelte:window on:mousemove={(preorder.inview && $innerWidth >= 960) ? throttle(handleMousemove, 400) : ''} />
<section id="preorder" use:inview={preorder.options} on:change={preorder.change} >
	<div class="container">
		<div class="wrapper" 
			class:inviewclass={preorder.inview}>
			{#if $innerWidth < 960} 
				<!-- <div class="parallax-bg" on:mousemove={handleMousemove} bind:this={parallax} >
					{#each frames as frame, index}
						{#if parseInt(currentFrame) == frame}
							<div class="frame active frame_{frame}">
								<picture>
									<source
										srcset={assets + '/frames/preorder/pre-order_' + frame + '.webp'}
										type="image/webp" width="1920" height="1080"
									/>
									<source
										srcset={assets + '/frames/preorder/pre-order_' + frame + '.jpeg'}
										type="image/jpeg" width="1920" height="1080"
									/>
									<img src={assets + '/frames/preorder/pre-order_' + frame + '.jpeg'} alt="" />
								</picture>
							</div>
						{:else}
							<div class="frame frame_{frame}">
								<picture>
									<source
										srcset={assets + '/frames/preorder/pre-order_' + frame + '.webp'}
										type="image/webp" width="1920" height="1080"
									/>
									<source
										srcset={assets + '/frames/preorder/pre-order_' + frame + '.jpeg'}
										type="image/jpeg" width="1920" height="1080"
									/>
									<img src={assets + '/frames/preorder/pre-order_' + frame + '.jpeg'} alt="" />
								</picture>
							</div>
						{/if}
					{/each}
				</div> -->
				{#if preorder.inview}
					<video autoplay playsinline muted {poster}>
						<source src={src} type="video/mp4" />
						{browserSupportText}
					</video>
				{:else}
					<video playsinline muted {poster} class="hidden">
						<source src={src} type="video/mp4" />
						{browserSupportText}
					</video>
				{/if}
			{:else}
				<div class="parallax-bg">
					{#each frames as frame, index}
						{#if parseInt(currentFrame) == frame}
							<div class="frame active frame_{frame}">
								<picture>
									<source
										srcset={assets + '/frames/preorder/pre-order_' + frame + '.jpeg'}
										type="image/jpeg" width="1920" height="1080"
									/>
									<img src={assets + '/frames/preorder/pre-order_' + frame + '.jpeg'} alt="" loading='lazy' class='lazy' />
								</picture>
							</div>
						{:else}
							<div class="frame frame_{frame}">
								<picture>
									<source
										srcset={assets + '/frames/preorder/pre-order_' + frame + '.jpeg'}
										type="image/jpeg" width="1920" height="1080"
									/>
									<img src={assets + '/frames/preorder/pre-order_' + frame + '.jpeg'} alt="" loading='lazy' class='lazy' />
								</picture>
							</div>
						{/if}
					{/each}
				</div>
			{/if}
			<div class="actionWrapper" id="preordercta">
				{#if preorder.inview}
					<p in:fade={(preorder.scrollDirection !== 'down') ? fadeIn.reveal[2] : fadeIn.none}>Box is available now!</p>
					<div class="cta" in:fade={(preorder.scrollDirection !== 'down') ? fadeIn.reveal[2] : fadeIn.none}>
						<a class="btn btn-cta" sveltekit:prefetch href="/preorder" bind:this={ctaButtonRef}>Pre-order</a>
					</div>
				{:else}
					<p class="hidden">Box is available now!</p>
					<div class="cta hidden">
						<a class="btn btn-cta" sveltekit:prefetch href="/preorder" bind:this={ctaButtonRef}>Pre-order</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
<style>
	/* video::-webkit-media-controls,
	video::-webkit-media-controls-play-button,
	video::-webkit-media-controls-volume-slider,
	video::-webkit-media-controls-mute-button,
	video::-webkit-media-controls-timeline,
	video::-webkit-media-controls-current-time-display {
		display: none;
	} */
	.wrapper {
		position: relative;
		height: var(--section-min-height);
		color: white;
		display: grid;
		justify-content: center;
		align-content: end;
		width: 100%;
		grid-template-columns: 1fr;
		padding-bottom: 121px;
		border-radius: 20px;
		overflow: hidden;
	}
	video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 1;
	}
	p,
	.cta {
		height: 80px;
		display: grid;
		position: relative;
		z-index: 1;
		width: 100%;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		font-weight: 400;
		line-height: 30px;
	}
	.cta {
		height: 56px;
	}
	a {
		height: 56px;
		width: 206px;
	}
	
    .parallax-bg {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }
    .frame {
		visibility: hidden;
		display: none;
        width: 100%;
		/* filter: blur(var(--blur));
		transition: filter 0.3s;
		will-change: filter; */
    }
	.frame.active {
		visibility: visible;
		z-index: 1;
		display: block;
	}
    img {
        height: auto;
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
	@media (min-width: 960px) {
		.wrapper {
			/* max-width: 95%; */
			margin: 0 auto;
		}
	}
	@media (max-width: 959px) {
		.container {
			padding: 0;
		}
	}
</style>
