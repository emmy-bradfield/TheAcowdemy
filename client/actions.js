const goHome = () => {
    for (i = 0; i< HOME.length; i++) {
        const BOX = HOME[i];
        if (hitBox({player: PLAYER, bound: BOX}) && enteredZone({player: PLAYER, bound: BOX})){
            console.log("Entering home...");
            HOME_DOOR.active = true;
        } 
    }
}

const goBarn = () => {
    for (i = 0; i< BARN.length; i++) {
        const BOX = BARN[i];
        if (hitBox({player: PLAYER, bound: BOX}) && enteredZone({player: PLAYER, bound: BOX})) {
            console.log("Entering barn...");
            BARN_DOOR.active = true;
        }
    }
}

const leave = () => {
    for (i = 0; i< LEAVE.length; i++) {
        const BOX = LEAVE[i];
        if (hitBox({player: PLAYER, bound: BOX})) {
            MOVABLES.forEach(movable => {
                movable.position.x -= 3600;
                movable.position.y += 450;
            })            
        }   
    }
}

const sailHome = () => {
    for (i = 0; i< RETURN.length; i++) {
        const BOX = RETURN[i];
        if (hitBox({player: PLAYER, bound: BOX})) {
            console.log("Returning home...");
            MOVABLES.forEach(movable => {
                movable.position.x += 3600;
                movable.position.y -= 450;
            })
        }
    }
}

const goHut = () => {
    for (i = 0; i< HUT.length; i++) {
        const BOX = HUT[i];
        if (hitBox({player: PLAYER, bound: BOX}) && enteredZone({player: PLAYER, bound: BOX})) {
            console.log("Entering hut...");
            HUT_DOOR.active = true;
        }
    }
}

const collect = () => {
    for (i = 0; i< COLLECTABLES.length; i++) {
        const BOX = COLLECTABLES[i];
        if (hitBox({player: PLAYER, bound: BOX}) && enteredZone({player: PLAYER, bound: BOX}) && Math.random() < 0.01) {
            console.log("Collectable found!");
        }
    }
}

const openChest = () => {
    for (i = 0; i < COLLECTABLES.length; i++) {
        const BOX = COLLECTABLES[i];
        if (hitBox({player: PLAYER, bound: BOX})) CHEST.active = true;
    }
}
