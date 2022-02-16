<script context="module">
	export const prerender = false;
	export const hydrate = false;
</script>

<script>
	import { onMount } from 'svelte';
	import { onDestroy } from 'svelte';
	import { initialValue, makeBlogStore } from '$lib/blog.js';
	import Blog_placeholder from '$lib/components/blog/placeholder.svelte';
	import BlogItem from '$lib/components/blog/item.svelte';
	let someProp = 'something';
	let store = makeBlogStore(someProp);
	let unsubscribe;
	let blogData = initialValue();
	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
			unsubscribe = null;
		}
	});
	function updateBlogData(data) {
		blogData = data;
	}
	onMount(() => {
		if (!unsubscribe) {
			unsubscribe = store.subscribe(updateBlogData);
		}
	});
</script>

{#if blogData.ready == true}
	{#if blogData.items != undefined}
		{#each blogData.items as post}
			<BlogItem {post} />
		{/each}
	{/if}
{:else if blogData.error != undefined}
	{#if blogData.error != undefined}
		<div>error: {blogData.error}</div>
	{/if}
{:else}
	<Blog_placeholder />
{/if}
