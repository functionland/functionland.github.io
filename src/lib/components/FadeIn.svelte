<script>
    export let inview;
    export let delay;
    export let fh;
    export let inheritbg;
</script>
<div
    style="{`${ typeof delay != 'undefined' ? `animation-delay: ${delay}s;` : '' }`}"
    class:inheritbg={inheritbg}
    class:fullheight={fh}
    class:fadeIn={inview.inview}
    class:fadeInFromBottom={inview.scrollDirection === 'down'}
    class:fadeInFromTop={inview.scrollDirection !== 'down'}
    class:fadeInToBottom={inview.scrollDirection === 'top'}
    class:fadeInToTop={inview.scrollDirection !== 'top'}
    >
    <slot/>
</div>
<style>
    .fullheight {
        height: 100%;
    }
    .inheritbg {
        background: inherit;
    }
</style>