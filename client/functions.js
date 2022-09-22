const INTERACTIVE_OBJECTS = [CHEST, HOME_DOOR, BARN_DOOR, HUT_DOOR, FENCE_GATE, WALL_GATE];
const BOUNDS = [...COLLISIONS, ...HOME, ...BARN, ...LEAVE, ...RETURN, ...HUT, ...COLLECTABLES, ...ANIMATE];
const MAPS = [MAP, FOREGROUND];
const MOVABLES = [ ...MAPS, ...BOUNDS, ...INTERACTIVE_OBJECTS];

const hitBox = ({player, bound}) => {
    return(
        player.position.x + player.width >= bound.position.x 
        && player.position.x <= bound.position.x + bound.width
        && player.position.y + player.height >= bound.position.y
        && player.position.y <= bound.position.y + bound.height
        );
};

const enteredZone = ({player, bound}) => {
    const overlap = 
    (Math.min(
        player.position.x + player.width,
        bound.position.x + bound.width
    ) - 
    Math.max(player.position.x, bound.position.x)) *
    (Math.min(player.position.y + player.height, 
        bound.position.y + bound.height)
        - Math.max(player.position.y, bound.position.y));
        return (overlap > (player.width * player.height) / 1.5)
}

const goHome = () => {
    for (i = 0; i< HOME.length; i++) {
        const BOX = HOME[i];
        if (hitBox({player: PLAYER, bound: BOX}) && enteredZone({player: PLAYER, bound: BOX})){
            console.log("Entering home...");
            zone = 'home';
        } 
    }
}

const goBarn = () => {
    for (i = 0; i< BARN.length; i++) {
        const BOX = BARN[i];
        if (hitBox({player: PLAYER, bound: BOX}) && enteredZone({player: PLAYER, bound: BOX})) {
            console.log("Entering barn...");
            zone = 'barn';
        }
    }
}

const leave = () => {
    for (i = 0; i< LEAVE.length; i++) {
        const BOX = LEAVE[i];
        if (hitBox({player: PLAYER, bound: BOX}) && enteredZone({player: PLAYER, bound: BOX})) {
            console.log("Sailing away...");
            zone = 'away';
        }   
    }
}

const sailHome = () => {
    for (i = 0; i< RETURN.length; i++) {
        const BOX = RETURN[i];
        if (hitBox({player: PLAYER, bound: BOX}) && enteredZone({player: PLAYER, bound: BOX})) {
            console.log("Sailing back home...");
            zone = 'main';
        }
    }
}

const goHut = () => {
    for (i = 0; i< HUT.length; i++) {
        const BOX = HUT[i];
        if (hitBox({player: PLAYER, bound: BOX}) && enteredZone({player: PLAYER, bound: BOX})) {
            console.log("Entering hut...");
            zone = 'hut';
        }
    }
}

const collect = () => {
    for (i = 0; i< COLLECTABLES.length; i++) {
        const BOX = COLLECTABLES[i];
        if (hitBox({player: PLAYER, bound: BOX}) && enteredZone({player: PLAYER, bound: BOX}) && Math.random() < 0.01) console.log("Collectable found!")
    }
}

const boundAlert = () => {
    moving = false;
};

const moveUp = () => {
    playerImg.src = up;
    PLAYER.moving = true;
    for (let i = 0; i < COLLISIONS.length; i++) {
        const BOX = COLLISIONS[i];
        if (hitBox(
            {
                player: PLAYER,
                bound: {
                    ...BOX,
                    position: {
                        x: BOX.position.x,
                        y: BOX.position.y + velocity
                    }
                }
            }
        )) {
            boundAlert();
            break;
        }
    }
    if (moving) MOVABLES.forEach(movable => movable.position.y += velocity);
};

const moveLeft = () => {
    playerImg.src = left;
    PLAYER.moving = true;
    for (let i = 0; i < COLLISIONS.length; i++) {
        const BOX = COLLISIONS[i];
        if (hitBox(
            {
                player: PLAYER,
                bound: {
                    ...BOX,
                    position: {
                        x: BOX.position.x + velocity,
                        y: BOX.position.y
                    }
                }
            }
        )) {
            boundAlert();
            break;
        }
    }
    if (moving) MOVABLES.forEach(movable => movable.position.x += velocity);
};

const moveDown = () => {
    playerImg.src = down;
    PLAYER.moving = true;
    for (let i = 0; i < COLLISIONS.length; i++) {
        const BOX = COLLISIONS[i];
        if (hitBox(
            {
                player: PLAYER,
                bound: {
                    ...BOX,
                    position: {
                        x: BOX.position.x,
                        y: BOX.position.y - velocity
                    }
                }
            }
        )) {
            boundAlert();
            break;
        }
    }
    if (moving) MOVABLES.forEach(movable => movable.position.y -= velocity);
};

const moveRight = () => {
    playerImg.src = right;
    PLAYER.moving = true;
    for (let i = 0; i < COLLISIONS.length; i++) {
        const BOX = COLLISIONS[i];
        if (hitBox(
            {
                player: PLAYER,
                bound: {
                    ...BOX,
                    position: {
                        x: BOX.position.x - velocity,
                        y: BOX.position.y
                    }
                }
            }
        )) {
            boundAlert();
            break;
        }
    }
    if (moving) MOVABLES.forEach(movable => movable.position.x -= velocity);
};

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