const canvas = document.querySelector('canvas');
canvas.width = 1024;
canvas.height = 576;

const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, canvas.width, canvas.height);

const mapImg = new Image();
mapImg.src = './assets/map.png';

const up = './assets/playerUp.png';

const left = './assets/playerLeft.png';

const down = './assets/playerDown.png';

const right = './assets/playerRight.png';

const playerImg = new Image();
playerImg.src = down;

const foregroundImg = new Image();
foregroundImg.src = './assets/foreground.png';

const homeGate = new Image();
homeGate.src = './assets/gate1/shut.png';

const awayGate = new Image();
awayGate.src = './assets/gate2/shut.png';

 const Images = {
    map: mapImg,
    player: playerImg,
    foreground: foregroundImg,
    fence: homeGate,
    wall: awayGate
};

const offset = {
    x: -1605,
    y: -750
};

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
};

let lastKey = '';

const velocity = 3;
let moving = false;