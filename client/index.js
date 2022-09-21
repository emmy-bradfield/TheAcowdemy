function animate() {
    window.requestAnimationFrame(animate);

    MAP.draw();
    PLAYER.draw();
    COLLISIONS.forEach(bound => bound.draw());
    COLLECTABLES.forEach(bound => bound.draw());
    FOREGROUND.draw();

    moving = true;
    PLAYER.moving = false;

    window.addEventListener('keydown', keyDownEvent);
    window.addEventListener('keyup', keyUpEvent);

    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) collect();

    if (keys.w.pressed && lastKey === 'w') moveUp();
    else if (keys.a.pressed && lastKey === 'a') moveLeft();
    else if (keys.s.pressed && lastKey === 's') moveDown();
    else if (keys.d.pressed && lastKey === 'd') moveRight();

};

animate();
