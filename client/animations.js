const gateAnimations = () => {
    for (i = 0; i < ANIMATE.length; i ++) {
        const BOX = ANIMATE[i];
        if (hitBox({player: PLAYER, bound: BOX})) {
            homeGate.src='./assets/gate1/open.png';
            awayGate.src='./assets/gat2/open.png';
        }
    }
};
