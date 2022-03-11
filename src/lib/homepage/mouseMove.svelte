<script>
	import throttle from 'just-throttle';
    import { onMount } from 'svelte';
	import { innerWidth } from 'svelte-window-stores/viewport';
    if ($innerWidth >= 960) {
        onMount(() => {
            document.addEventListener('mousemove', function(e){
                var elements = Array.prototype.slice.call(document.querySelectorAll('.transforminview'));
                var mouseX = e.pageX;
                var mouseY = e.pageY;
                var maxTransform = 30; //in px
                function getXdistance(elem) {
                    var rect = elem.getBoundingClientRect();
                    return Math.floor(mouseX - ((window.pageXOffset + rect.left)+(rect.width/2)));
                }
                function getYdistance(elem) {
                    var rect = elem.getBoundingClientRect();
                    return Math.floor(mouseY - ((window.pageYOffset + rect.top)+(rect.height/2)));
                }
                function calculateDistance(elem) {
                    var x = getXdistance(elem);
                    var y = getYdistance(elem);
                    var distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
                    return distance;
                }
                function calculateMaxDistance(elem) {
                    var rect = elem.getBoundingClientRect();
                    return Math.floor(Math.sqrt(Math.pow(Math.abs(mouseX - ((window.pageXOffset + rect.left)+(rect.width/2))), 2) + Math.pow(Math.abs(mouseY - ((window.pageYOffset + rect.top)+(rect.height/2))), 2)));
                }
                function calculateMaxTransform (distance, maxDistance) {
                    return (distance / maxDistance) * maxTransform;
                }

                if (elements.length > 0) {
                    throttle(elements.forEach((element,index) => {
                        var xDistance = getXdistance(element);
                        var yDistance = getYdistance(element);
                        var maxDistance = calculateMaxDistance(element);
                        // if (index == 0) {
                        //     console.log(xDistance, yDistance, maxDistance);
                        // }
                        window.requestAnimationFrame(function(){
                            element.style.transform = 'translate3d(' + calculateMaxTransform(xDistance, maxDistance) + 'px, ' + calculateMaxTransform(yDistance, maxDistance) + 'px, 0)';
                        });
                    }), 300);
                }
            });
        });
    }
</script>
