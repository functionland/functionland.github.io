<script context="module">
	export const prerender = true;
</script>

<script>
	export let data;
</script>

<h3>{data.title}</h3>
<p>{data.description}</p>
<div>{data.type}</div>
