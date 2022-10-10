

function animate() {
    window.requestAnimationFrame(animate);

    SCHOOL_BACKGROUND.draw();
    INTERACTIVE_OBJECTS.forEach(object => object.draw());
    BOUNDS.forEach(bound => bound.draw());
    playerImg.onload(PLAYER.draw());
    UI.draw();

    moving = true;
    PLAYER.moving = false;
    HUT_DOOR.active = false;
    SECOND_GATE.active = false;

    updateItems();
    
    window.addEventListener('keydown', keyDownEvent);
    window.addEventListener('keyup', keyUpEvent);

    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
        sailHome();
        collect();
        gateAnimations();
    }
    
    if (keys.w.pressed && lastKey === 'w') moveUp();
    else if (keys.a.pressed && lastKey === 'a') moveLeft();
    else if (keys.s.pressed && lastKey === 's') moveDown();
    else if (keys.d.pressed && lastKey === 'd') moveRight();

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
