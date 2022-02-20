<script>
	import { assets } from '$app/paths';
	let src = assets + `videos/pre-order.mp4`;
	let poster = assets + `images/home/preorder-poster.jpg`;
	let browserSupportText = 'Your browser does not support the video element.';
	import { onMount } from 'svelte';
	let ended;
	// let innerWidth;
	onMount(() => {
		const loadLazyVideos = () => {
			var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
			if ("IntersectionObserver" in window) {
				var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
				entries.forEach(function(video) {
					if (video.isIntersecting) {
					for (var source in video.target.children) {
						var videoSource = video.target.children[source];
						if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
						videoSource.src = videoSource.dataset.src;
						}
					}

					video.target.load();
					video.target.classList.remove("lazy");
					lazyVideoObserver.unobserve(video.target);
					}
				});
				});

				lazyVideos.forEach(function(lazyVideo) {
				lazyVideoObserver.observe(lazyVideo);
				});
			}
		}
		const docReady = callbackFunc => {
			if (document.readyState !== 'loading') {
			callbackFunc();
			} else if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', callbackFunc);
			} else {
			document.attachEvent('onreadystatechange', function () {
				if (document.readyState === 'complete') {
				callbackFunc();
				}
			});
			}
		};
		docReady(loadLazyVideos);
	});
</script>

<section>
	<div class="container">
		<div class="wrapper">
			<video autoplay loop playsinline muted poster={poster} class="lazy" bind:ended>
				<source data-src={src} type="video/mp4" />
				{browserSupportText}
			</video>
			<p>Box is available now!</p>
			<div class="cta">
				<a class="btn btn-cta" sveltekit:prefetch href="/preorder">Pre-order</a>
			</div>
		</div>
	</div>
</section>

<!-- <svelte:window bind:innerWidth={innerWidth} /> -->
<style>

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
		z-index: 0;
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
	@media(min-width:960px) {
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
