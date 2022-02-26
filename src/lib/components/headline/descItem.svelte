<script>
	import { innerWidth } from 'svelte-window-stores/viewport';
	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	export let item;
	const heading = {
		inview: false,
		options: {
			threshold: 0.3,
			unobserveOnEnter: false
		},
		scrollDirection: '',
		change:({ detail }) => {
			heading.inview = detail.inView;
			heading.scrollDirection = detail.scrollDirection.vertical;
		},
	}
	const paragraph = {
		inview: false,
		options: {
			threshold: 0.1,
			unobserveOnEnter: false
		},
		scrollDirection: '',
		change:({ detail }) => {
			paragraph.inview = detail.inView;
			paragraph.scrollDirection = detail.scrollDirection.vertical;
		},
	}
    const fadeIn = {
        reveal: [
            { duration: 400, delay: 300 },
            { duration: 400, delay: 600 },
            { duration: 400, delay: 900 },
            { duration: 400, delay: 1200 },
            { duration: 400, delay: 1400 },
            { duration: 400, delay: 1600 },
            { duration: 400, delay: 1800 },
            { duration: 400, delay: 1800 },
        ],
        none: { duration: 0, delay: 0 }
    };
    $: isMobile = $innerWidth < 960
</script>

{#if !isMobile}
    {#if item.ref == 'plug-n-play' || item.ref == 'customizable'}
        <h3 use:inview={heading.options} on:change={heading.change}
            class={item.ref}>
            <span
                class:fade-in-right-delay={heading.inview}
                class:fade-out-right-delay={!heading.inview}>
                {@html item.main_title}
            </span>
        </h3>
        <p use:inview={paragraph.options} on:change={paragraph.change}
            class={item.ref}>
            <span
                class:fade-in-right-delay={paragraph.inview}
                class:fade-out-right-delay={!paragraph.inview}>
                {@html item.main_desc}
            </span>
        </p>
    {:else}
        <h3 use:inview={heading.options} on:change={heading.change} class={item.ref}>
            {#if heading.inview}
                <span
                    in:fade={(heading.scrollDirection !== 'down') ? fadeIn.reveal[0] : fadeIn.none}>
                    {@html item.main_title}
                </span>
            {:else}
                <span class="hidden">
                    {@html item.main_title}
                </span>
            {/if}
        </h3>
        <p use:inview={paragraph.options} on:change={paragraph.change} class={item.ref}>
            {#if paragraph.inview}
                <span
                    in:fade={(paragraph.scrollDirection !== 'down') ? fadeIn.reveal[1] : fadeIn.none}>
                    {@html item.main_desc}
                </span>
            {:else}
                <span class="hidden">
                    {@html item.main_desc}
                </span>
            {/if}
        </p>
        <!-- {#if parentObserver.inview}
        {:else}
            <h3 use:inview={heading.options} on:change={heading.change}
                class={data.ref}>
                {#if heading.inview}
                    <span
                        in:fade={(heading.scrollDirection !== 'down') ? fadeIn.reveal[1] : fadeIn.none}>
                        {data.main_title}
                    </span>
                {/if}
            </h3>
            <p use:inview={paragraph.options} on:change={paragraph.change}
                class={data.ref}>
                {#if paragraph.inview}
                    <span
                        in:fade={(paragraph.scrollDirection !== 'down') ? fadeIn.reveal[2] : fadeIn.none}>
                        {data.main_desc}
                    </span>
                {/if}
            </p>
        {/if} -->
    {/if}
{:else}
    <h3 use:inview={heading.options} on:change={heading.change} class={item.ref}>
        {#if heading.inview}
            <span
                in:fade={(heading.scrollDirection !== 'down') ? fadeIn.reveal[0] : fadeIn.none}>
                {item.main_title}
            </span>
        {:else}
            <span class="hidden">
                {item.main_title}
            </span>
        {/if}
    </h3>
    <p use:inview={paragraph.options} on:change={paragraph.change} class={item.ref}>
        {#if paragraph.inview}
            <span
                in:fade={(paragraph.scrollDirection !== 'down') ? fadeIn.reveal[1] : fadeIn.none}>
                {item.main_desc}
            </span>
        {:else}
            <span class="hidden">
                {item.main_desc}
            </span>
        {/if}
    </p>
{/if}

<style>
	.hidden {
		opacity: 0;
	}
	.fade-in-right-delay {
		animation: fade-in-right 1s ease-in-out normal both;
		animation-delay: 0.8s;
	}
	.fade-out-right-delay {
		animation: fade-out-right 0.4s ease-in-out normal both;
		animation-delay: 0.5s;
	}
	h3 {
		z-index: 1;
		margin: 0 auto;
		text-align: center;
		position: relative;
		/* max-width: var(--description-max-width); */
		padding: var(--description-title-padding);
		font-size: var(--description-title-font-size);
		line-height: var(--description-title-line-height);
		font-weight: var(--description-title-font-weight);
	}
    h3.earn-crypto {
		color: white;
		grid-row-gap: 20px;
		padding-bottom: 0;
	}
	p {
		z-index: 1;
		margin: 0 auto;
		position: relative;
		/* max-width: var(--description-max-width); */
		padding: 0 1rem;
		/* font-size: var(--description-desc-font-size); */
		line-height: var(--description-desc-line-height);
		padding-bottom: var(--description-desc-padding-bottom);
	}
	p.apps-without-ads {
		text-align: center;
		max-width: 90%;
	}
	p.earn-crypto {
		max-width: 90%;
		padding: 0;
	}
	@media (min-width: 960px) {
		p {
			width: var(--description-max-width);
			max-width: 900px;
		}
		p.earn-crypto {
			max-width: 900px;
		}
		h3.plug-n-play,
		p.plug-n-play {
			padding: 1rem 0;
            margin: unset;
            /* width: auto; */
            justify-self: start;
		}
		h3.customizable,
		p.customizable {
			grid-column: 2/3;
			padding: 1rem 0;
			text-align: start;
			width: 100%;
			max-width: 78%;
		}
		h3.plug-n-play,
		h3.customizable {
			grid-row: 2/3;
		}
		p.customizable,
		p.plug-n-play {
			grid-row: 3/4;
		}
	}
	@media (max-width: 959px) {
		h3.earn-crypto {
			font-size: 42px;
			line-height: 1.2;
			padding: 2rem 1rem 1.5rem;
		}
		p.earn-crypto {
			aspect-ratio: 228/220;
			width: 100%;
			max-width: 75%;
		}
	}
</style>