const moveUp = () => {
    playerImg.src = up;
    moving = true;
    if (moving) MOVABLES.forEach(movable => movable.position.y += velocity);
};

const moveLeft = () => {
    playerImg.src = left;
    moving = true;
    if (moving) MOVABLES.forEach(movable => movable.position.x += velocity);
};

const moveDown = () => {
    playerImg.src = down;
    moving = true;
    if (moving) MOVABLES.forEach(movable => movable.position.y -= velocity);
};

const moveRight = () => {
    playerImg.src = right;
    moving = true;
    if (moving) MOVABLES.forEach(movable => movable.position.x -= velocity);
}

const keyDownEvent = (e) => {
    switch(e.key) {
        case 'w' : keys.w.pressed = true; lastKey = 'w'; break;
        case 'ArrowUp' : keys.w.pressed = true; lastKey = 'w'; break;
        case 'a' : keys.a.pressed = true; lastKey = 'a'; break;
        case 'ArrowLeft' : keys.a.pressed = true; lastKey = 'a'; break;
        case 's' : keys.s.pressed = true; lastKey = 's'; break;
        case 'ArrowDown' : keys.s.pressed = true; lastKey = 's'; break;
        case 'd' : keys.d.pressed = true; lastKey = 'd'; break;
        case 'ArrowRight' : keys.d.pressed = true; lastKey = 'd'; break;
    };
};

const keyUpEvent = (e) => {
    switch(e.key) {
        case 'w' : keys.w.pressed = false; break;
        case 'ArrowUp' : keys.w.pressed = false; break;
        case 'a' : keys.a.pressed = false; break;
        case 'ArrowLeft' : keys.a.pressed = false; break;
        case 's' : keys.s.pressed = false; break;
        case 'ArrowDown' : keys.s.pressed = false; break;
        case 'd' : keys.d.pressed = false; break;
        case 'ArrowRight' : keys.d.pressed = false; break;
    };
};