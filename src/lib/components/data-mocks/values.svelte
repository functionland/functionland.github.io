<script context="module">
	import { assets } from '$app/paths';
	const lipsum =
		'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.';
	export const data = [
		{
			type: 'value',
			ref: 'own-your-data',
			intro_title: 'Own Your Data',
			intro_desc: lipsum,
			main_title: 'Own Your Data',
			main_desc: lipsum,
			cta_text: 'Learn more',
			videos: [
				{
					src: assets + 'videos/own-your-data-b.mp4',
					type: 'video/mp4',
					scheme: 'dark',
					poster: assets + 'images/home-page/own-your-data-b.jpg'
				},
				{
					src: assets + 'videos/own-your-data-w.mp4',
					type: 'video/mp4',
					scheme: 'light',
					poster: assets + 'images/home-page/own-your-data-w.jpg'
				}
			],
			photos: []
		},
		{
			type: 'value',
			ref: 'apps-without-ads',
			intro_title: 'Apps Without Ads or Subscription',
			intro_desc: lipsum,
			main_title: 'With Box You Can Enjoy Photos!',
			main_desc: 'Access your favorite apps without the need to pay!',
			cta_text: 'Learn more',
			videos: [],
			photos: [
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos-1-small.jpg',
							width: 247,
							height: 192
						},
						large: {
							src: assets + 'images/photos-app/photos-1-large.jpg',
							width: 329,
							height: 495
						},
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos-2-small.jpg',
							width: 360,
							height: 279
						},
						large: {
							src: assets + 'images/photos-app/photos-2-large.jpg',
							width: 850,
							height: 563
						},
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos-3-small.jpg',
							width: 139,
							height: 293
						},
						large: {
							src: assets + 'images/photos-app/photos-3-large.jpg',
							width: 581,
							height: 388
						},
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos-4-small.jpg',
							width: 180,
							height: 245
						},
						large: {
							src: assets + 'images/photos-app/photos-4-large.jpg',
							width: 692,
							height: 463
						},
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos-5-small.jpg',
							width: 265,
							height: 229
						},
						large: {
							src: assets + 'images/photos-app/photos-5-large.jpg',
							width: 325,
							height: 591
						},
					},
					type: 'image/jpg'
				}
			]
		},
		{
			type: 'value',
			ref: 'earn-crypto',
			intro_title: 'Earn Crypto',
			intro_desc: lipsum,
			main_title: 'Earn Crypto',
			main_desc: lipsum,
			cta_text: 'Learn more',
			videos: [
				{
					src: assets + 'videos/earn-crypto.webm',
					type: 'video/webm',
					media: 'light',
					role: 'main',
					poster: assets + 'images/home-page/earn-crypto.jpg'
				},
				{
					src: assets + 'videos/earn-crypto-loop.webm',
					type: 'video/webm',
					media: 'light',
					role: 'loop',
					poster: assets + 'images/home-page/earn-crypto.jpg'
				}
			],
			photos: []
		}
	];
</script>
