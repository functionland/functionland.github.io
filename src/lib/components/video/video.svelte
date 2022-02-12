<script>
    import { onMount } from 'svelte';
    export let sources;
    let time = 0;
    let duration;
    let scrollY = 0;
    let windowScroll = 0;
    let totalScroll = 0;
    onMount(() => {
        windowScroll = document.documentElement.scrollHeight - window.innerHeight;
    });
        $: {
            totalScroll = windowScroll;
            time = duration * (scrollY / totalScroll);
        }
  </script>
  <svelte:window bind:scrollY />
  <div class="video-container">
    <video 
        bind:currentTime={time}
        bind:duration
        preload
        muted
        nodownload
        disablepictureinpicture
        playsinline>
        <source src={sources.webM} type="video/webm">
        <source src={sources.Mp4} type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
    </video>
  </div>
  <style>
    .video-container {
      position: absolute;
      top: 0;
      bottom: 0;
      overflow: hidden;
    }
    .video-container video {
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  </style>