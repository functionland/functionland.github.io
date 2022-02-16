<script context="module">
	export const prerender = true;
	import { assets } from "$app/paths";
	const lipsum =
		'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.';
	export const data = {
		headlines: [
			{
				title: 'Own Your Data',
				description: lipsum,
				to: 'own-your-data'
			},
			{
				title: 'Apps Without Ads or Subscription',
				description: lipsum,
				to: 'apps-without-ads'
			},
			{
				title: 'Earn Crypto',
				description: lipsum,
				to: 'earn-crypto'
			}
		],
		sections: [
			{
				title: 'Own Your Data',
				description: lipsum,
				ref: 'own-your-data',
				videos: [
					{
						src: assets + 'videos/own-your-data-w.webm',
						type: 'video/webm',
						media: '(prefers-color-scheme: dark)',
					},
					{
						src: assets + 'videos/own-your-data-b.webm',
						type: 'video/webm',
						media: '(prefers-color-scheme: light)',
					},
					{
						src: assets + 'videos/own-your-data-w.mp4',
						type: 'video/mp4',
						media: '(prefers-color-scheme: dark)',
					},
					{
						src: assets + 'videos/own-your-data-b.mp4',
						type: 'video/mp4',
						media: '(prefers-color-scheme: light)',
					},
				]
			},
			{
				title: 'Apps Without Ads or Subscription',
				description: lipsum,
				ref: 'apps-without-ads',
				type: 'Photos'
			},
			{
				title: 'Earn Crypto',
				description: lipsum,
				ref: 'earn-crypto',
				videos: [
					{
						src: assets + 'videos/earn-crypto.mp4',
						type: 'video/mp4',
						media: '(prefers-color-scheme: light)',
					}
				]
			}
		]
	};
</script>
