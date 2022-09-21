const MAP = new Sprite({
    position:{
        x: offset.x,
        y: offset.y
    },
    image: Images.map
});

const PLAYER = new Sprite({
    position:{
        x: (canvas.width/2)-(Images.player.width/18),
        y: (canvas.height/2)-(Images.player.height/2)
    },
    image: Images.player,
    frames: {
        max: 9
    }
});

const FOREGROUND = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: Images.foreground
});

const FENCE_GATE = new Sprite({
    position: {
        x: -8,
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