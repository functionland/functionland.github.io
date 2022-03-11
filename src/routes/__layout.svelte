<script context="module">
	export const prerender = true;
</script>
<svelte:head>
<!-- MailerLite Universal -->
<script>
(function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
_.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');
var ml_account = ml('accounts', '3699446', 'b2k9f5k0b8', 'load');
</script>
<!-- End MailerLite Universal -->

</svelte:head>
<script>
	import * as animateScroll from 'svelte-scrollto';
	import Footer from '$lib/footer/index.svelte';
	animateScroll.setGlobalOptions({
		offset: -60
	});
	import Header from '$lib/header/index.svelte';
	import '../styles/app.css';
	import '../styles/animations.css';
</script>

<Header />
<slot />
<Footer />
