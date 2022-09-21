function animate(){
    window.requestAnimationFrame(animate);

    MAP.draw();
    PLAYER.draw();
    FOREGROUND.draw();
};

animate();