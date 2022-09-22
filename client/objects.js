// CANVAS
const canvas = document.querySelector('canvas');
canvas.width = 1024;
canvas.height = 576;

const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, canvas.width, canvas.height);

// SPRITE IMAGES
const mapImg = new Image();
mapImg.src = './assets/map.png';

const up = './assets/spritesheets/playerUp.png';

const left = './assets/spritesheets/playerLeft.png';

const down = './assets/spritesheets/playerDown.png';

const right = './assets/spritesheets/playerRight.png';

const playerImg = new Image();
playerImg.src = down;

const foregroundImg = new Image();
foregroundImg.src = './assets/foreground.png';

const homeGate = new Image();
homeGate.src = './assets/gate1/shut.png';

const awayGate = new Image();
awayGate.src = './assets/gate2/shut.png';

const homeImg = new Image();
homeImg.src = './assets/spritesheets/homeDoor.png';

const barnImg = new Image();
barnImg.src = './assets/spritesheets/barnDoor.png';

const hutImg = new Image();
hutImg.src = './assets/spritesheets/hutDoor.png';

const chestImg = new Image();
chestImg.src = './assets/spritesheets/chest.png';

const Images = {
    map: mapImg,
    player: playerImg,
    foreground: foregroundImg,
    fence: homeGate,
    wall: awayGate,
    home: homeImg,
    barn: barnImg,
    hut: hutImg,
    chest: chestImg
};

// MOVEMENT
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


// POSITIONING
let zone = '';

const offset = {
    x: -1605,
    y: -750
};