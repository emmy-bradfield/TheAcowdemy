window.addEventListener('load', getCows)

function animate() {
    window.requestAnimationFrame(animate);

    BACKGROUND.draw();

}

animate();
