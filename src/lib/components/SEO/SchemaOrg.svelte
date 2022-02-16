<script>
	import hash from 'object-hash';
	export let author;
	export let siteLanguage;
	export let siteTitle;
	export let siteTitleAlt;
	export let siteUrl;
	const entityHash = hash({ author }, { algorithm: 'md5' });
	const schemaOrgWebsite = {
		'@type': 'WebSite',
		'@id': `${siteUrl}/#website`,
		url: siteUrl,
		name: siteTitle,
		description: siteTitleAlt,
		publisher: {
			'@id': `${siteUrl}/#/schema/person/${entityHash}`
		},
		potentialAction: [
			{
				'@type': 'SearchAction',
				target: `${siteUrl}/?s={query}`,
				query: 'required'
			}
		],
		inLanguage: siteLanguage
	};
	const schemaOrgArray = [schemaOrgWebsite];
	const schemaOrgObject = {
		'@context': 'https://schema.org',
		'@graph': schemaOrgArray
	};
	let jsonLdString = JSON.stringify(schemaOrgObject);
	let jsonLdScript = `
                <script type="application/ld+json">
                        ${jsonLdString}
                ${'<'}/script>
        `;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
