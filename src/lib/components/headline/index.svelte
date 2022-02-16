<script context="module">
	export const prerender = true;
</script>

<script>
	import { scrollTo } from 'svelte-scrolling';
	export let data;
</script>
<h2>{data.title}</h2>
<p>{data.description}</p>
<button use:scrollTo={data.to} class="btn btn-cta">Learn more</button>

<style>
	h2 {
		font-size: var(--headline-title-font-size);
		line-height: var(--headline-title-line-height);
		font-weight: var(--headline-title-font-weight);
		letter-spacing: var(--headline-letter-spacing);
		padding-bottom: var(--headline-title-padding-bottom);
	}
	p {
		font-size: var(--headline-content-font-size);
		line-height: var(--headline-content-line-height);
		font-weight: var(--headline-content-font-weight);
		padding-bottom: var(--headline-content-padding-bottom);
	}
	@media (min-width: 960px) {
		button {
			align-self: bottom;
		}
	}
</style>
