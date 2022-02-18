<script context="module">
	export const prerender = true;
	import { assets } from "$app/paths";
	const lipsum = 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.';
	export const data = [
			{
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
						poster: assets + 'images/home-page/own-your-data-b.jpg',
					},
					{
						src: assets + 'videos/own-your-data-w.mp4',
						type: 'video/mp4',
						scheme: 'light',
						poster: assets + 'images/home-page/own-your-data-w.jpg',
					},
				],
				photos: []
			},
			{
				ref: 'apps-without-ads',
				intro_title: 'Apps Without Ads or Subscription',
				intro_desc: lipsum,
				main_title: 'With Box You Can Enjoy Photos!',
				main_desc: "Access your favorite apps without the need to pay!",
				cta_text: 'Learn more',
				videos: [],
				photos: [
					{
						srcset: {
							small: assets + 'images/photos-app/photos-1-small.jpg',
							large: assets + 'images/photos-app/photos-1-large.jpg',
						},
						type: 'image/jpg',
					},
					{
						srcset: {
							small: assets + 'images/photos-app/photos-2-small.jpg',
							large: assets + 'images/photos-app/photos-2-large.jpg',
						},
						type: 'image/jpg',
					},
					{
						srcset: {
							small: assets + 'images/photos-app/photos-3-small.jpg',
							large: assets + 'images/photos-app/photos-3-large.jpg',
						},
						type: 'image/jpg',
					},
					{
						srcset: {
							small: assets + 'images/photos-app/photos-4-small.jpg',
							large: assets + 'images/photos-app/photos-4-large.jpg',
						},
						type: 'image/jpg',
					},
					{
						srcset: {
							small: assets + 'images/photos-app/photos-5-small.jpg',
							large: assets + 'images/photos-app/photos-5-large.jpg',
						},
						type: 'image/jpg',
					},
				]
			},
			{
				ref: 'earn-crypto',
				intro_title: 'Earn Crypto',
				intro_desc: lipsum,
				main_title: 'Earn Crypto',
				main_desc: lipsum,
				cta_text: 'Learn more',
				videos: [
					{
						src: assets + 'videos/earn-crypto.mp4',
						type: 'video/mp4',
						media: 'light',
						poster: assets + 'images/home-page/own-your-data-b.jpg',
					}
				],
				photos: []
			}
		];
</script>