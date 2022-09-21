const canvas = document.querySelector('canvas');
canvas.width = 1024;
canvas.height = 576;

const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, canvas.width, canvas.height);

const mapImg = new Image();
mapImg.src = './assets/map.png';

const playerImg = new Image();
playerImg.src = './assets/playerDown.png';

const foregroundImg = new Image();
foregroundImg.src = './assets/foreground.png';

 const Images = {
    map: mapImg,
    player: playerImg,
    foreground: foregroundImg
};

const offset = {
    x: -1575,
    y: -750
};

let lastKey = '';

