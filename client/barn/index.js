window.addEventListener('load', getCows)

function animate() {
    window.requestAnimationFrame(animate);

    BACKGROUND.draw();
    COWS.forEach(cow => {
        cow.draw();
    })

}

window.onload = function(){
    if(!window.location.hash){
        window.location = window.location + '#loaded';
        window.location.reload();
    } else {
        gsap.to("#child", {opacity: 0, duration: 3})
    }
}

animate();
