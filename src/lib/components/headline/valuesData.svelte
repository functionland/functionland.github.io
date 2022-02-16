<script context="module">
	export const prerender = true;
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
				type: 'DataOwning'
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
				type: 'Earn'
			}
		]
	};
</script>
