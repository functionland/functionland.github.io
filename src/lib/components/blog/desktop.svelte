<script>
	import Blog_placeholder from '$lib/components/blog/placeholder.svelte';
	import BlogItem from '$lib/components/blog/item.svelte';
    export let blogData;
</script>
<div class="wrapper">
	<div class="grid">
		{#if blogData.ready == true}
			{#if blogData.items != undefined}
				{#each blogData.items as post, index}
					<BlogItem {post} />
				{/each}
			{/if}
		{:else if blogData.error != undefined}
			{#if blogData.error != undefined}
				<div>error: {blogData.error}</div>
			{/if}
		{:else}
			<Blog_placeholder />
			<Blog_placeholder />
			<Blog_placeholder />
		{/if}
	</div>
</div>

<style>
	.grid {
		display: grid;
		grid-auto-flow: row;
		grid-row-gap: 16px;
		margin: 0 auto;
	}

	@media (min-width: 960px) {
		.grid {
			max-width: 1200px;
			grid-template-columns: repeat(3, 1fr);
			gap: 15px;
		}
	}
</style>
