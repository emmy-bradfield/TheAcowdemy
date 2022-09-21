function animate() {
    window.requestAnimationFrame(animate);

    MAP.draw();
    FENCE_GATE.draw();
    WALL_GATE.draw();
    PLAYER.draw();
    COLLISIONS.forEach(bound => bound.draw());
    HOME.forEach(bound => bound.draw());
    BARN.forEach(bound => bound.draw());
    LEAVE.forEach(bound => bound.draw());
    RETURN.forEach(bound => bound.draw());
    HUT.forEach(bound => bound.draw());
    COLLECTABLES.forEach(bound => bound.draw());
    ANIMATE.forEach(bound => bound.draw());
    FOREGROUND.draw();
    
    moving = true;
    PLAYER.moving = false;

    window.addEventListener('keydown', keyDownEvent);
    window.addEventListener('keyup', keyUpEvent);

    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
        homeGate.src='./assets/gate1/shut.png';
        awayGate.src='./assets/gate2/shut.png';
        goHome();
        goBarn();
        leave();
        sailHome();
        goHut();
        collect();
        gateAnimations();
    }
    

    if (keys.w.pressed && lastKey === 'w') moveUp();
    else if (keys.a.pressed && lastKey === 'a') moveLeft();
    else if (keys.s.pressed && lastKey === 's') moveDown();
    else if (keys.d.pressed && lastKey === 'd') moveRight();

};

animate();
