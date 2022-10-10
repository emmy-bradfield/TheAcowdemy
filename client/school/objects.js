// CANVAS
const canvas = document.querySelector('canvas');
canvas.width = 1024;
canvas.height = 576;

const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, canvas.width, canvas.height);

// IMAGES
// --static
const schoolMap = new Image();
schoolMap.src = '../assets/img/schoolMap_start.png';

// --sprite
const playerImg = new Image();

let up = '../assets/spritesheets/playerUp.png';
let left = '../assets/spritesheets/playerLeft.png';
let down = '../assets/spritesheets/playerDown.png';
let right = '../assets/spritesheets/playerRight.png';

playerImg.src = right;

const overlayImg = new Image();

const max = '../assets/img/overlay.png';
const min = '../assets/img/overlayDown.png';

overlayImg.src = max;

// --object
const hutImg = new Image();
hutImg.src = '../assets/spritesheets/hutDoor.png';

const secondGate = new Image();
secondGate.src = '../assets/spritesheets/secondGate.png';

// --array
const Images = {
    player: playerImg,
    overlay: overlayImg,
    hut: hutImg,
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
    x: -2000,
    y: -900
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