const sailHome = () => {
    for (i = 0; i < RETURN.length; i ++) {
        const BOX = RETURN[i];
        if (hitBox({player: PLAYER, bound: BOX})) {
            console.log("Returning home...");
            window.location.replace("../index.html");
        }
    }
}

const goHut = () => {
    for (i = 0; i < HUT.length; i ++) {
        const BOX = HUT[i];
        if (hitBox({player: PLAYER, bound: BOX}) && enteredZone({player: PLAYER, bound: BOX})) {
            HUT_DOOR.active = true;
            window.alert("COMING SOON!");
        }
    }
}

const collect = () => {
    for (i = 0; i < COLLECTABLES.length; i ++) {
        const BOX = COLLECTABLES[i];
        if (hitBox({player: PLAYER, bound: BOX}) && enteredZone({player: PLAYER, bound: BOX}) && Math.random() < 0.1) {
            console.log("Item found!")
            if (Math.random() > 0.5) {
                INVENTORY.bugs += 1;
                ACCOUNT.items[0].bug = INVENTORY.bugs
            } else if (Math.random() > 0.15) {
                INVENTORY.plants += 1;
                ACCOUNT.items[0].veg = INVENTORY.plants
            } else {
                INVENTORY.coins += 1;
                ACCOUNT.items[0].gem = INVENTORY.coins
            }
            ACCOUNT.items[0].CP = (ACCOUNT.items[0].bug) + (ACCOUNT.items[0].veg * 3) + (ACCOUNT.items[0].gem * 5);
            localStorage.setItem("user", JSON.stringify(ACCOUNT));
        }
    }
}