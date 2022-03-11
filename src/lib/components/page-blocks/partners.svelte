<script>
	import Grid from '$lib/components/grid/partners.svelte';
	export let data;
</script>

<section>
	<div class="container">
		<div class="heading">
			<div class="title">{data.title}</div>
			<p>{data.description}</p>
		</div>
		<Grid list={data.list} />
	</div>
</section>

<style>
	section {
		font-family: var(--inter);
		padding: 3rem 0 5rem;
		background: #f6f6f6;
	}
	.heading {
		font-family: var(--inter);
		padding: 80px 0;
		text-align: center;
	}
	.title {
		font-size: 44px;
		font-weight: 700;
		padding-bottom: 2rem;
	}
	p {
		font-size: 18px;
		line-height: 1.5;
		font-weight: 500;
		padding: 0 20px;
	}
</style>
