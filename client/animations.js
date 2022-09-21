const openFenceGate = () => {
    for (i = 0; i < ANIMATE.length; i ++) {
        const BOX = ANIMATE[i];
        do {
            homeGate.src='./assets/gate1/open.png'
        } while (hitBox({player: PLAYER, bound: BOX}))  
    }
}

const openWallGate = () => {
    for (i = 0; i < ANIMATE.length; i++ ){
        const BOX = ANIMATE[i];
        do {
            awayGate.src='./assets/gate2/open.png'
        } while (hitBox({player: PLAYER, bound: BOX}))
    }
}
