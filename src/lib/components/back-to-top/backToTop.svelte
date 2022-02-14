<script>
	import BackIcon from '$lib/img/layout/backToTop.svelte';
    export let showOnPx = 450;
    let hidden = true;
  
    function goTop() {
      document.body.scrollIntoView();
    }
  
    function scrollContainer() {
      return document.documentElement || document.body;
    }
  
    function handleOnScroll() {
      if (!scrollContainer()) {
        return;
      }
  
      if (scrollContainer().scrollTop > showOnPx) {
        hidden = false;
      } else {
        hidden = true;
      }
    }
  </script>
  
  <style>
    .back-to-top {
      opacity: 1;
      transition: opacity 0.5s, visibility 0.5s;
      position: fixed;
      z-index: 99;
      right: 20px;
      user-select: none;
      bottom: 20px;
      color: white;
      background-color: transparent;
    }
  
    .back-to-top.hidden {
      opacity: 0;
      visibility: hidden;
    }
    @media (min-width: 960px) {
        .back-to-top {
            background-color: var(--b-o-05);
            padding: 10px;
            border-radius: 50%;
            transition: background-color 0.3s;
        }
        .back-to-top:hover {
            cursor: pointer;
            background: var(--b-o-1);
        }
    }
  </style>
  
  <svelte:window on:scroll="{handleOnScroll}" />
  <div class="back-to-top" on:click="{goTop}" class:hidden><BackIcon width="28px" height="32px" fill="gray"/></div>