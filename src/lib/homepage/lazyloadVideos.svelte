<script>
    import { onMount } from 'svelte';
    onMount(() => {
        var lazyVideos = [].slice.call(document.querySelectorAll('video.lazy'));
        if ('IntersectionObserver' in window) {
            var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (video) {
                    if (video.isIntersecting) {
                        for (var source in video.target.children) {
                            var videoSource = video.target.children[source];
                            if (typeof videoSource.tagName === 'string' && videoSource.tagName === 'SOURCE') {
                                videoSource.src = videoSource.dataset.src;
                            }
                        }

                        video.target.load();
                        video.target.classList.remove('lazy');
                        lazyVideoObserver.unobserve(video.target);
                    }
                });
            });

            lazyVideos.forEach(function (lazyVideo) {
                lazyVideoObserver.observe(lazyVideo);
            });
        } else {
            entries.forEach(function (video) {
                for (var source in video.target.children) {
                    var videoSource = video.target.children[source];
                    if (typeof videoSource.tagName === 'string' && videoSource.tagName === 'SOURCE') {
                        videoSource.src = videoSource.dataset.src;
                    }
                }
                video.target.load();
                video.target.classList.remove('lazy');
            });
        }
	});
</script>
