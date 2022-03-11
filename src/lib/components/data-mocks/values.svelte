<script context="module">
	import { assets } from '$app/paths';
	const lipsum =
		'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.';
	export const data = [
		{
			show: true,
			type: 'value',
			ref: 'own-your-data',
			intro_title: 'Own Your Data',
			intro_desc: 'Box is built from the ground up. It was designed to put the power back into YOUR hands. Your data is your property, and yours alone. Your photos, files, and data are fully encrypted. Nobody else has a key.',
			main_title: 'Own Your Data',
			main_desc: 'Get a peace of mind with Box. Our proprietary AES-256 encryption software hacker-proofs your data. Even if the world’s most talented hacker were able to bring the power of all world’s computers to bear on your Box,  it would still take (literally!) billions of years to break into your files. Only you can access your data. Only you can share it.',
			show_cta: true,
			cta_text: 'Learn more',
			videos: [
				{
					src: assets + 'videos/own_your_data_dark.mp4',
					type: 'video/mp4',
					scheme: 'dark',
					poster: assets + 'images/home-page/own-your-data-b.jpg'
				},
				{
					src: assets + 'videos/own_your_data_light.mp4',
					type: 'video/mp4',
					scheme: 'light',
					poster: assets + 'images/home-page/own-your-data-w.jpg'
				}
			],
			photos: []
		},
		{
			show: true,
			type: 'value',
			ref: 'apps-without-ads',
			intro_title: 'Apps Without Ads or Subscription',
			intro_desc: 'Box gives you private cloud storage. No ads. No tracking. No subscription fees. It is designed to be a self-sustainable ecosystem for both users and developers. <br> No kidding. ',
			main_title: 'Start with Box Photos! ',
			main_desc: 'Our app Photos - recognized by GitHub as in the top 3% of open-source apps worldwide - is a polished, forever-free application that works seamlessly on any device. It provides fast, easy access and sharing from anywhere, across any device.',
			show_cta: true,
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
						}
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
						}
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
						}
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
						}
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
						}
					},
					type: 'image/jpg'
				}
			]
		},
		{
			show: true,
			type: 'value',
			ref: 'earn-crypto',
			intro_title: 'Earn Crypto',
			intro_desc: 'Box quietly earns tokens by providing backups and resources to others on the network. When you make backups, take advantage of cloud services or use apps,  Box compensates the open-source developers, UX designers, and contributors who built them for you.',
			main_title: 'Earn Crypto',
			main_desc: 'Thanks to BAS, our Blockchain-Attached Storage solution, Box lets you share storage and CPU power with others while quietly mining FULA tokens in the background.',
			show_cta: true,
			cta_text: 'Learn more',
			videos: [
				{
					src: assets + 'videos/earn_crypto.mp4',
					type: 'video/mp4',
					media: 'light',
					role: 'small',
					poster: assets + 'images/home-page/earn-crypto.jpg'
				},
				{
					src: assets + 'videos/earn_crypto_desktop.mp4',
					// src: assets + 'videos/earn-crypto.mp4',
					type: 'video/mp4',
					media: 'light',
					role: 'large',
					poster: assets + 'images/home-page/earn-crypto.jpg'
				}
			],
			photos: []
		}
	];
</script>
