<script context="module">
	export const prerender = true;
</script>

<script>
	import { scrollTo } from 'svelte-scrolling';
	export let item;
</script>
<h2>{item.intro_title}</h2>
<p>{item.intro_desc}</p>
<button use:scrollTo={item.ref} class="btn btn-cta">{item.cta_text}</button>
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
