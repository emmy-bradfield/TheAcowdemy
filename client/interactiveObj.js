const FENCE_GATE = new Sprite({
    position: {
        x: -6,
        y: 930
    },
    image: Images.fence
});

const WALL_GATE = new Sprite({
    position: {
        x: 3995,
        y: 930
    },
    image: Images.wall
});

const CHEST = new Sprite({
    position: {
        x: 750,
        y: 150
    },
    image: Images.chest,
    frames: {
        max: 2
    }
});

const HOME_DOOR = new Sprite({
    position: {
        x: 480,
        y: 180
    },
    image: Images.home,
    frames: {
        max: 2
    }
});

const BARN_DOOR = new Sprite({
    position: {
        x: 450,
        y: 900
    },
    image: Images.barn,
    frames: {
        max: 2
    }
});

const HUT_DOOR = new Sprite({
    position: {
        x: 3990,
        y: 950
    },
    image: Images.barn,
    frames: {
        max: 2
    }
});