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
        y: (canvas.height/2)-(Images.player.height)
    },
    image: Images.player,
    frames: {
        max: 9,
        rate: 5
    }
});

const FOREGROUND = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: Images.foreground
});

const UI = new Sprite({
    position: {
        x: (canvas.width/2)-(Images.overlay.width/2),
        y: (canvas.height/2)-(Images.overlay.height/2)
    },
    image: Images.overlay
})