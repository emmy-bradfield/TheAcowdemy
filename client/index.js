function animate() {
    window.requestAnimationFrame(animate);

    MAP.draw();
    INTERACTIVE_OBJECTS.forEach(object => object.draw());
    PLAYER.draw();
    BOUNDS.forEach(bound => bound.draw());
    FOREGROUND.draw();
    UI.draw();
    
    moving = true;
    PLAYER.moving = false;
    HOME_DOOR.active = false;
    BARN_DOOR.active = false;
    HUT_DOOR.active = false;
    CHEST.active = false;
    MAIN_GATE.active = false;
    SECOND_GATE.active = false;

    goHome();
    goBarn();
    goHut();
    openChest();
    
    window.addEventListener('keydown', keyDownEvent);
    window.addEventListener('keyup', keyUpEvent);

    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
        leave();
        sailHome();
        collect();
        gateAnimations();
    }
    
    if (keys.w.pressed && lastKey === 'w') moveUp();
    else if (keys.a.pressed && lastKey === 'a') moveLeft();
    else if (keys.s.pressed && lastKey === 's') moveDown();
    else if (keys.d.pressed && lastKey === 'd') moveRight();

};

animate();
