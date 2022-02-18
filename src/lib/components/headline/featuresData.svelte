<script context="module">
	export const prerender = true;
	import { assets } from "$app/paths";
	const lipsum = 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.';
	export const data = [
		{
			type: 'feature',
			ref: 'plug-n-play',
			intro_title: 'Plug-n-Play',
			intro_desc: lipsum,
			main_title: 'Plug-n-Play',
			main_desc: lipsum,
			cta_text: 'Learn more',
			videos: [],
			photos: [
				{
					srcset: {
						small: assets + 'images/home/plug-n-play-small.jpg',
						large: assets + 'images/home/plug-n-play-large.jpg',
					},
					type: 'image/jpg',
				},
			]
		},
		{
			type: 'feature',
			ref: 'customizable',
			intro_title: 'Customizable',
			intro_desc: lipsum,
			main_title: 'Customizable',
			main_desc: lipsum,
			cta_text: 'Learn more',
			videos: [
				{
					src: assets + 'videos/customizable-w.mp4',
					type: 'video/webm',
					scheme: 'light',
					poster: assets + 'images/home-page/customizable.png',
				},
				{
					src: assets + 'videos/customizable-b.webm',
					type: 'video/webm',
					scheme: 'dark',
					poster: assets + 'images/home-page/own-your-data-w.jpg',
				},
				// {
				// 	src: assets + 'videos/customizable-b.webm',
				// 	type: 'video/mp4',
				// 	scheme: 'light',
				// 	poster: assets + 'images/home-page/own-your-data-w.jpg',
				// },
			],
			photos: []
		},
		{
			type: 'feature',
			ref: 'design',
			intro_title: 'Thoughtful Design',
			intro_desc: lipsum,
			main_title: 'Thoughtful Design',
			main_desc: lipsum,
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
		}
	];
</script>
