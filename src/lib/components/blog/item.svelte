<script>
	import Description from '../headline/description.svelte';
	export let post;
	var cleanerElement = document.createElement('div');
	let title = post.title;
	cleanerElement.innerHTML = title;
	title = cleanerElement.textContent || cleanerElement.innerText || '';
	let date = new Date(post.published);
	let dateFormatted = date.toLocaleString('default', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
	// console.log(post);
</script>

<article>
	<a href={post.link} target="_blank">
		<img src={post.media.thumbnail.url} alt={title} loading="lazy" decoding="async" />
		<div>
			<em>{title}</em>
			<time>{dateFormatted}</time>
		</div>
		<!-- <p>{description}</p> -->
	</a>
</article>

<style>
	article {
		margin: 0 auto;
		width: 100%;
		padding-top: 100%;
		border-radius: 6px;
		overflow: hidden;
		position: relative;
	}
	a {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: block;
		overflow: hidden;
		color: white;
	}
	a:after {
		content: '';
		background: var(--b-o-3);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	img {
		position: absolute;
		display: block;
		max-width: unset;
		height: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	div {
		position: absolute;
		width: 80%;
		max-width: 400px;
		height: 80%;
		max-height: 400px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 5px solid white;
		z-index: 3;
		background-blend-mode: darken;
		display: grid;
		grid-template-rows: 1fr auto;
	}
	div:before {
		content: '';
		background: var(--b-o-7);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}
	em {
		font-size: 24px;
		line-height: 36px;
		font-weight: 700;
		position: relative;
		z-index: 1;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		max-height: min-content;
		padding: 1rem 1rem 0;
	}
	time {
		display: block;
		align-self: end;
		color: white;
		position: relative;
		z-index: 1;
		font-size: 22px;
		font-weight: 400;
		padding: 0 1rem 1rem;
	}
</style>
