function animate() {
    window.requestAnimationFrame(animate);

    MAP.draw();
    INTERACTIVE_OBJECTS.forEach(object => object.draw());
    PLAYER.draw();
    BOUNDS.forEach(bound => bound.draw());
    FOREGROUND.draw();
    
    moving = true;
    PLAYER.moving = false;
    HOME_DOOR.active = false;
    BARN_DOOR.active = false;
    HUT_DOOR.active = false;
    CHEST.active = false;
    homeGate.src='./assets/gate1/shut.png';
    awayGate.src='./assets/gate2/shut.png';

    goHome();
    goBarn();
    leave();
    sailHome();
    goHut();
    openChest();
    
    window.addEventListener('keydown', keyDownEvent);
    window.addEventListener('keyup', keyUpEvent);

    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
        collect();
        gateAnimations();
    }
    
    if (keys.w.pressed && lastKey === 'w') moveUp();
    else if (keys.a.pressed && lastKey === 'a') moveLeft();
    else if (keys.s.pressed && lastKey === 's') moveDown();
    else if (keys.d.pressed && lastKey === 'd') moveRight();

};

animate();
