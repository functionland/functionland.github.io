<script context="module">
	export const prerender = true;
</script>
<script>
    import error404 from '$lib/img/layout/404.svelte';
    import error from '$lib/img/layout/error.svelte';
    import Logo from '$lib/components/Logo/Logo.svelte';
    export let status;
    export let message;
</script>
<!-- <section>
    <div class="title">Oops!... {status}</div>
    <svelte:component this={error404} width={404} height={404} class="icon"/>
    <div class="message">The <span>box</span> you are looking for does not exist!</div>
    <a sveltekit:prefetch href="/" class="logo-link" title="FunctionLand">
        <Logo mark={true} />
        <span>Click here to go to FunctionLand's home page and find out more about the box!</span>
    </a>
</section> -->

<section class="container">
    <div class="err-box">
        <div class="title">Oops!... </div>
        <div class="icon">
            <svelte:component this={error} width={404} height={404}/>
        </div>
        <div class="message">An error has occurred!</div>
        <div class="error">
            <div class="err-status">{status}</div>
            <div class="err-message">{message}</div>
        </div>
        <a sveltekit:prefetch href="/" class="logo-link" title="FunctionLand">
            <!-- <Logo type="mark" /> -->
            <span>Click here to go to FunctionLand's home page and find out more about the box!</span>
        </a>
    </div>
</section>
<style>
    .title {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: var(--err-svg-color);
    }
    .icon {
        max-width: 300px;
    }
</style>