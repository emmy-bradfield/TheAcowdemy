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

const schoolMap = new Image();
schoolMap.src = './assets/img/schoolMap_start.png';

// --sprite
const playerImg = new Image();

let up = './assets/spritesheets/playerUp.png';
let left = './assets/spritesheets/playerLeft.png';
let down = './assets/spritesheets/playerDown.png';
let right = './assets/spritesheets/playerRight.png';

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
    foreground: foregroundImg,
    player: playerImg,
    overlay: overlayImg,
    home: homeImg,
    barn: barnImg,
    hut: hutImg,
    chest: chestImg,
    gateOne: mainGate,
    gateTwo: secondGate
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
    y: -800
};

// IN-GAME ITEMS
let ACCOUNT;

const INVENTORY = {
    plants: 0,
    coins: 0,
    bugs: 0,
    coins: 0
};

const COWS = [];

const Daisy = {
    name: 'Daisy',
    age: 2,
    rarity: 1
};