window.addEventListener('load', getCows)

function animate() {
    window.requestAnimationFrame(animate);

    BACKGROUND.draw();
    COWS.forEach(cow => {
        cow.draw();
    })

}

animate();
