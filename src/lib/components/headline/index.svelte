<script>
	// import { scrollTo } from 'svelte-scrolling';
	import { scrollto } from "svelte-scrollto";
    import { inview } from 'svelte-inview';
	const inViewOptions = {
		threshold: 0.7,
		unobserveOnEnter: false,
	};
    let isInView, scrollDirection;
    const handleChange = ({ detail }) => {
        isInView = detail.inView;
        scrollDirection = detail.scrollDirection.vertical;
    };
	export let item;
	export let titled;
	export let index;
</script>

	<div class="{`item ${titled ? 'titled' : '' }`}" use:inview={inViewOptions} on:change={handleChange}>
		<div style="animation-delay: {(index+1) * 200}ms;"
			class:animate={isInView}
			class:animateFromBottom={scrollDirection === 'down'}
			class:animateFromTop={scrollDirection !== 'down'}
			class:animateToBottom={scrollDirection === 'Top'}
			class:animateToTop={scrollDirection !== 'Top'}>
			<h2>{item.intro_title}</h2>
			<p>{item.intro_desc}</p>
			<!-- <button use:scrollTo={item.ref} class="btn btn-cta">{item.cta_text}</button> -->
			<button use:scrollto={`#${item.ref}`} class="btn btn-cta">{item.cta_text}</button>
		</div>
	</div>
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
	
	.item.titled {
		grid-row: 2;
	}
	.animateFromTop, .animateFromBottom, .animateToBottom, .animateToTop {
		opacity: 0;
		animation-name: none;
	}
	.animate.animateFromTop {
		-webkit-animation: fade-in-bottom 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-in-bottom 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.1s;
	}
	.animate.animateFromBottom {
		-webkit-animation: fade-in-top 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.1s;
	}
	.animate.animateToBottom {
		-webkit-animation: fade-in-top 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-in-top 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.1s;
	}
	.animate.animateToTop {
		-webkit-animation: fade-in-bottom 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation: fade-in-bottom 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) normal both;
		animation-delay: 0.1s;
	}
	@media (min-width: 960px) {
		button {
			align-self: bottom;
		}
		.item {
			height: 100%;
			display: grid;
			grid-auto-flow: column;
			grid-template-rows: auto 1fr auto;
			width: 100%;
			grid-template-columns: 1fr;
			max-width: unset;
		}
	}
	@media (max-width: 960px) {
		.item {
			padding: 0 15px;
		}
	}
</style>
