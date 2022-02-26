<script>
	import { inview } from 'svelte-inview';
	import DescriptionItem from '$lib/components/headline/descItem.svelte';
	import Videos from '$lib/components/headline/videos.svelte';
	import Photos from '$lib/components/headline/photos.svelte';
    
	export let data;
	const observer = {
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
			observer.inview = detail.inView;
			observer.scrollDirection = detail.scrollDirection.vertical;
		},
	}
</script>
<section id={data.ref}>
    <div class="container">
        <div class="wrapper {data.ref}">
            <DescriptionItem item={data}/>
            <Videos {data}/>
            <Photos {data}/>
        </div>	
    </div>
</section>
<style>
	section,
	.wrapper {
		min-height: var(--description-min-height);
	}
	.wrapper {
		padding: 0;
		display: grid;
		overflow: hidden;
		position: relative;
		justify-items: center;
        align-items: center;
		grid-template-rows: auto auto 1fr;
		/* grid-row-gap: var(--description-row-gap); */
		gap: 0;
	}
	.wrapper.apps-without-ads,
	.wrapper.design {
		margin-bottom: 120px;
	}
	section#earn-crypto,
	.wrapper.earn-crypto {
		min-height: unset;
	}
	.wrapper.earn-crypto {
		color: white;
		background: #4c4d51;
		grid-row-gap: 20px;
	}
	.wrapper.earn-crypto:before {
		content: '';
		background: linear-gradient(180deg, #4c4d51 60.48%, rgba(79, 80, 85, 0) 92.22%);
		top: 0;
		left: 0;
		width: 100%;
		height: 40%;
		position: absolute;
		z-index: 1;
		pointer-events: none;
	}
    #customizable .container, #customizable .wrapper, #customizable .video-wrapper{
        /* overflow: unset; */
    }
	@media (min-width: 960px) {
        section#plug-n-play,section#customizable {
            /* height: var(--description-min-height); */
			padding-bottom: 10rem;
        }
		#earn-crypto .wrapper {
			border-radius: 20px;
			overflow: hidden;
		}
		.wrapper.apps-without-ads {
			overflow: unset;
		}
		.wrapper.plug-n-play,
		.wrapper.customizable {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr max-content max-content 1fr;
			align-items: center;
			justify-content: center;
			align-content: center;
		}
		.wrapper.earn-crypto:before {
			height: 10%;
		}
	}
	@media (max-width: 959px) {
		section#earn-crypto {
			padding-bottom: 0;
		}
		section#earn-crypto > .container {
			padding: 0;
		}
	}
	@media (prefers-color-scheme: dark) {
		section#own-your-data {
			background: linear-gradient(to left, rgb(58 63 72) 0%,rgb(58 63 72) 100%);
		}
	}
</style>
