// CANVAS
const canvas = document.querySelector('canvas');
canvas.width = 1024;
canvas.height = 576;

const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, canvas.width, canvas.height);

// IMAGES
// --static
const mapImg = new Image();
mapImg.src = './assets/img/map.png';

const foregroundImg = new Image();
foregroundImg.src = './assets/img/foreground.png';

// --sprite
const playerImg = new Image();

const up = './assets/spritesheets/playerUp.png';
const left = './assets/spritesheets/playerLeft.png';
const down = './assets/spritesheets/playerDown.png';
const right = './assets/spritesheets/playerRight.png';

playerImg.src = down;

const overlayImg = new Image();

const max = './assets/img/overlay.png';
const min = './assets/img/overlayDown.png';

overlayImg.src = max;

// --object
const homeImg = new Image();
homeImg.src = './assets/spritesheets/homeDoor.png';

const barnImg = new Image();
barnImg.src = './assets/spritesheets/barnDoor.png';

const hutImg = new Image();
hutImg.src = './assets/spritesheets/hutDoor.png';

const mainGate = new Image();
mainGate.src = './assets/spritesheets/mainGate.png';

const secondGate = new Image();
secondGate.src = './assets/spritesheets/secondGate.png';

const chestImg = new Image();
chestImg.src = './assets/spritesheets/chest.png';

// --array
const Images = {
    map: mapImg,
    player: playerImg,
    foreground: foregroundImg,
    gateOne: mainGate,
    gateTwo: secondGate,
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

const velocity = 5;

let moving = false;

const offset = {
    x: -1605,
    y: -750
};