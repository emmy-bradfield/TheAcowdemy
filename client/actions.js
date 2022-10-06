const goHome = () => {
    for (i = 0; i< HOME.length; i++) {
        const BOX = HOME[i];
        if (hitBox({player: PLAYER, bound: BOX}) && enteredZone({player: PLAYER, bound: BOX})){
            HOME_DOOR.active = true;
            setInterval(window.location.replace('../home'), 5000);
        } 
    }
}

const goBarn = () => {
    for (i = 0; i< BARN.length; i++) {
        const BOX = BARN[i];
        if (hitBox({player: PLAYER, bound: BOX}) && enteredZone({player: PLAYER, bound: BOX})) {
            BARN_DOOR.active = true;
            setInterval(window.location.replace('../barn'), 5000);
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
            HUT_DOOR.active = true;
            setInterval(window.location.replace('../hut'), 5000);
        }
    }
}

const collect = () => {
    for (i = 0; i< COLLECTABLES.length; i++) {
        const BOX = COLLECTABLES[i];
        if (hitBox({player: PLAYER, bound: BOX}) && enteredZone({player: PLAYER, bound: BOX}) && Math.random() < 0.1) {
            console.log("Item found!")
            if (Math.random() > 0.5) {
                INVENTORY.bugs +=1;
                ACCOUNT.items[0].bug = INVENTORY.bugs
            } else if (Math.random() > 0.15) {
                INVENTORY.plants +=1;
                ACCOUNT.items[0].veg = INVENTORY.plants
            } else {
                INVENTORY.coins +=1;
                ACCOUNT.items[0].gem = INVENTORY.coins
            }
            localStorage.setItem("user", JSON.stringify(ACCOUNT));
        }
    }
}

const openChest = () => {
    for (i = 0; i < COLLECTABLES.length; i++) {
        const BOX = COLLECTABLES[i];
        if (hitBox({player: PLAYER, bound: BOX})) CHEST.active = true;
    }
}
