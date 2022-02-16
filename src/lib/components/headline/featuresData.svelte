<script context="module">
	export const prerender = true;
	const lipsum =
		'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.';
	export const data = {
		headlines: [
			{
				title: 'Plug-n-Play',
				description: lipsum,
				to: 'plug-n-play'
			},
			{
				title: 'Customizable',
				description: lipsum,
				to: 'customizable'
			},
			{
				title: 'Design',
				description: lipsum,
				to: 'design'
			}
		],
		sections: [
			{
				title: 'Plug-n-Play',
				description: lipsum,
				ref: 'plug-n-play',
				type: 'PlugNplay'
			},
			{
				title: 'Customizable',
				description: lipsum,
				ref: 'customizable',
				type: 'Customizable'
			},
			{
				title: 'Thoughtful Design',
				description: lipsum,
				ref: 'design',
				type: 'Design'
			}
		]
	};
</script>
