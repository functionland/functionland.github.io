<script context="module">
	import { assets } from '$app/paths';
	import { data as partnersList } from '$lib/components/data-mocks/partners.svelte';
	export const data = {
		page: {
			heading: {
				title: 'About Us',
				description: 'Pulvinar auctor nisl, volutpat turpis enim id. '
			},
			intro: {
				title: 'We believe in a fairer future.',
				description:
					'Where every participant is both user and co-owner. To make this future accessible to all, it must be affordable. We’re building an open ecosystem that empowers software & hardware developers to create, build and share.'
			}
		},
		team: {
			title: 'Meet Our Team',
			description: 'Pulvinar auctor nisl, volutpat turpis enim id. ',
			list: [
				{
					name: 'Keyvan Sadeghi',
					position: 'CEO',
					image: assets + 'images/team/keyvan-sadeghi.png',
					artwork: assets + 'images/team/keyvan-sadeghi-artwork.jpg'
				},
				{
					name: 'Kate Writhers',
					position: 'Partnerships',
					image: assets + 'images/team/kate-writhers.png',
					artwork: assets + 'images/team/kate-writhers-artwork.jpg'
				},
				{
					name: 'Ehsan Shariati',
					position: 'CTO',
					image: assets + 'images/team/ehsan-shariati.jpg',
					artwork: assets + 'images/team/ehsan-shariati-artwork.jpg'
				},
				{
					name: 'Ehsan Emami',
					position: 'Hardware',
					image: assets + 'images/team/ehsan-emami.png',
					artwork: assets + 'images/team/ehsan-emami-artwork.jpg'
				},
				{
					name: 'Arman Shirani',
					position: 'Marketing',
					image: assets + 'images/team/arman-shirani.jpg',
					artwork: assets + 'images/team/arman-shirani-artwork.jpg'
				},
				{
					name: 'Erfan Shekarchi',
					position: 'Tokenomics',
					image: assets + 'images/team/erfan-shekarchi.png',
					artwork: assets + 'images/team/erfan-shekarchi-artwork.jpg'
				},
				{
					name: 'Sheida Shahbaz',
					position: 'Art & NFT',
					image: assets + 'images/team/sheida-shahbaz.png',
					artwork: assets + 'images/team/sheida-shahbaz-artwork.jpg'
				},
				{
					name: 'Andrew Monaghan',
					position: 'Growth',
					image: assets + 'images/team/andrew-monaghan.jpg',
					artwork: assets + 'images/team/andrew-monaghan-artwork.jpg'
				},
				{
					name: 'Jonathan Groeneveld',
					position: 'Hardware',
					image: assets + 'images/team/jonathan-groeneveld.png',
					artwork: assets + 'images/team/jonathan-groeneveld-artwork.jpg'
				}
			]
		},
		advisors: {
			title: 'Meet Our Advisors',
			description: 'Pulvinar auctor nisl, volutpat turpis enim id. ',
			list: [
				{
					name: 'Crhis Gale',
					position: 'Founder | ViewWorks',
					image: assets + 'images/advisors/crhis-gale.png',
					artwork: assets + 'images/advisors/crhis-gale-artwork.jpg'
				},
				{
					name: 'Zac Cohen',
					position: 'Founder | FileBase',
					image: assets + 'images/advisors/zac-cohen.png',
					artwork: assets + 'images/advisors/zac-cohen-artwork.jpg'
				},
				{
					name: 'Shaun Neff',
					position: 'Founder | Neff Headwear',
					image: assets + 'images/advisors/shaun-neff.jpg',
					artwork: assets + 'images/advisors/shaun-neff-artwork.jpg'
				},
				{
					name: 'Andy Lark',
					position: 'CEO | Group Lark',
					image: assets + 'images/advisors/andy-lark.png',
					artwork: assets + 'images/advisors/andy-lark-artwork.jpg'
				}
			]
		},
		partners: {
			title: 'Our Partners',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
			list: partnersList
		},
		memories: {
			title: 'Our Memories',
			description: 'Access Your favorite apps without the need to pay!',
			photos: [
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos-1-small.jpg',
							width: 476,
							height: 288
						},
						large: {
							src: assets + 'images/photos-app/photos-1-large.jpg',
							width: 476,
							height: 288
						}
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos-2-small.jpg',
							width: 449,
							height: 288
						},
						large: {
							src: assets + 'images/photos-app/photos-2-large.jpg',
							width: 449,
							height: 288
						}
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos-3-small.jpg',
							width: 584,
							height: 363
						},
						large: {
							src: assets + 'images/photos-app/photos-3-large.jpg',
							width: 584,
							height: 363
						}
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos-4-small.jpg',
							width: 186,
							height: 282
						},
						large: {
							src: assets + 'images/photos-app/photos-4-large.jpg',
							width: 186,
							height: 282
						}
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos-5-small.jpg',
							width: 494,
							height: 279
						},
						large: {
							src: assets + 'images/photos-app/photos-5-large.jpg',
							width: 494,
							height: 279
						}
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos-5-small.jpg',
							width: 233,
							height: 276
						},
						large: {
							src: assets + 'images/photos-app/photos-5-large.jpg',
							width: 233,
							height: 276
						}
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos-5-small.jpg',
							width: 698,
							height: 457
						},
						large: {
							src: assets + 'images/photos-app/photos-5-large.jpg',
							width: 698,
							height: 457
						}
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos-5-small.jpg',
							width: 612,
							height: 457
						},
						large: {
							src: assets + 'images/photos-app/photos-5-large.jpg',
							width: 612,
							height: 457
						}
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos-5-small.jpg',
							width: 449,
							height: 431
						},
						large: {
							src: assets + 'images/photos-app/photos-5-large.jpg',
							width: 449,
							height: 431
						}
					},
					type: 'image/jpg'
				},
				{
					srcset: {
						small: {
							src: assets + 'images/photos-app/photos-5-small.jpg',
							width: 857,
							height: 431
						},
						large: {
							src: assets + 'images/photos-app/photos-5-large.jpg',
							width: 857,
							height: 431
						}
					},
					type: 'image/jpg'
				}
			]
		},
		jobs: {
			main_title: 'Help Us Build a Better Future, Join Functionland',
			title: 'Available Positions',
			description: 'Email us at hi@fx.land to learn more!',
			cta_items: [
				{
					title: 'Marketing Intern',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu blandit congue, nunc nisl consectetur nunc, euismod aliquam nisl nunc euismod nunc. Donec euismod, nisi eu blandit congue, nunc nisl consectetur nunc, euismod aliquam nisl nunc euismod nunc. Donec euismod, nisi eu blandit congue, nunc nisl consectetur nunc, euismod aliquam nisl nunc euismod nunc.',
					cta: {
						text: 'Apply',
						url: '#'
					}
				},
				{
					title: 'Community Growth Lead',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu blandit congue, nunc nisl consectetur nunc, euismod aliquam nisl nunc euismod nunc. Donec euismod, nisi eu blandit congue, nunc nisl consectetur nunc, euismod aliquam nisl nunc euismod nunc. Donec euismod, nisi eu blandit congue, nunc nisl consectetur nunc, euismod aliquam nisl nunc euismod nunc.',
					cta: {
						text: 'Apply',
						url: '#'
					}
				},
				{
					title: 'Social Media Manager',
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisi eu blandit congue, nunc nisl consectetur nunc, euismod aliquam nisl nunc euismod nunc. Donec euismod, nisi eu blandit congue, nunc nisl consectetur nunc, euismod aliquam nisl nunc euismod nunc. Donec euismod, nisi eu blandit congue, nunc nisl consectetur nunc, euismod aliquam nisl nunc euismod nunc.',
					cta: {
						text: 'Apply',
						url: '#'
					}
				}
			]
		}
	};
</script>
