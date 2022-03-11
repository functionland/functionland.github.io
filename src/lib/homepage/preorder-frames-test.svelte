<script>
	import { assets } from '$app/paths';
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';
	import { innerWidth, innerHeight, scrollY } from 'svelte-window-stores/viewport';
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
	let frames = [],
		lastScroll = 0,
		currentFrame = 3,
		parallax;
	let totalFrames = 179;
	for (let i = 0; i < totalFrames; i++) {
		frames.push(i);
	}
	let m = { x: 0, y: 0 };
    let framesToAdd
	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
	let detectScroll
    $: onMount(()=>{
			let parallaxHeight = parallax.offsetHeight;
			let scroll = $scrollY;
        detectScroll = (event) => {
            if ( $innerWidth < 960 && preorder.inview == true ) {
                let framesToAdd = ((Math.round( (($scrollY / ($innerHeight / totalFrames)) / totalFrames) / ( (($innerHeight * 1.5) / totalFrames) / 100  )) * 100) / totalFrames) / 100;
			    if ($scrollY > lastScroll) {
					let scrollDiff = $scrollY - lastScroll;
					let scrollDiffPercentage = scrollDiff / parallaxHeight;
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
<svelte:window on:scroll={detectScroll}/>
<section id="preorder" use:inview={preorder.options} on:change={preorder.change}>
	<div class="container">
		<div class="wrapper" 
			class:inviewclass={preorder.inview}>
			<div class="parallax-bg" on:mousemove={handleMousemove} bind:this={parallax} >
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
			</div>
			<div class="actionWrapper" id="preordercta">
				{#if $innerWidth < 960}
					{#if currentFrame > 134}
						<p in:fade={fadeIn.reveal[0]} out:fade={fadeIn.reveal[0]}>Box is available now!</p>
						<div class="cta" in:fade={fadeIn.reveal[0]} out:fade={fadeIn.reveal[0]}>
							<a class="btn btn-cta" sveltekit:prefetch href="/preorder">Pre-order</a>
						</div>
					{/if}
				{:else}
					<p>Box is available now!</p>
					<div class="cta" >
						<a class="btn btn-cta" sveltekit:prefetch href="/preorder">Pre-order</a>
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
	#preorder {
		position: relative;
		min-height: calc(250vh);
		overflow: hidden;
		z-index: 0;
	}
	.wrapper {
		position: relative;
		top: 60px;
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
    	min-height: calc(250vh);
	}
	.actionWrapper {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 2;
		transform: translateY(-80%);
	}
	/* video {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 1;
	} */
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
	
    b {
        position: fixed;
        bottom: 10px;
        z-index: 9999;
        background-color: var(--b-o-7);
        color: white;
        padding: 1rem;
    }
    .parallax-bg {
        position: relative;
		min-height: calc(250vh);
    }
    .frame {
        position: fixed;
        height: 100vh;
        top: 0px;
        left: 0;
        right: 0;
		bottom: 0;
		visibility: hidden;
		display: none;
    }
	.frame.active {
		visibility: visible;
		z-index: 1;
		display: block;
	}
    img {
        max-width: unset;
        height: 100%;
        width: unset;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

    }
	@media (min-width: 960px) {
		.wrapper {
			max-width: 95%;
			margin: 0 auto;
		}
	}
	@media (max-width: 959px) {
		.container {
			padding: 0;
		}
	}
</style>
