<script>
	import { innerWidth } from 'svelte-window-stores/viewport';
	import { onDestroy } from 'svelte';
	import { initialValue, makeBlogStore } from '$lib/components/blog/store.svelte';
	import Blog_placeholder from '$lib/components/blog/placeholder.svelte';
	import BlogItem from '$lib/components/blog/item.svelte';
	let someProp = 'something';
	let store = makeBlogStore(someProp);
	let unsubscribe;
	let blogData = initialValue();
	if (!unsubscribe) {
		unsubscribe = store.subscribe(updateBlogData);
	}
	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
			unsubscribe = null;
		}
	});
	function updateBlogData(data) {
		blogData = data;
	}
	$: limit = $innerWidth < 960 ? 3 : 9;
</script>
<div class="wrapper">
	<div class="grid">
		{#if blogData.ready == true}
			{#if blogData.items != undefined}
				{#each blogData.items as post, index}
					{#if index < limit}
						<BlogItem post={post} />
					{/if}
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
		/* max-width: calc(100% - 32px); */
		margin: 0 auto;
	}

	@media (min-width: 960px) {
		.grid {
			max-width: 1200px;
			grid-template-columns: repeat(3, 1fr);
			gap: 15px;
			/* max-width: 70%; */
		}
	}
</style>