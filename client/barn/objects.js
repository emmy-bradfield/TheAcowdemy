// CANVAS
const canvas = document.querySelector('canvas');
canvas.width = 1024;
canvas.height = 576;

const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, canvas.width, canvas.height);

// IMAGES
// --static
const display = new Image();
display.src = '../assets/img/barn.png';

// DOM
const div = document.querySelector("#display");

// IN-GAME ITEMS
const INVENTORY = {
    plants: 0,
    coins: 0,
    bugs: 0
};

const cowArray = [];
const COWS = [];
let cowImage = new Image();
cowImage.src = '../assets/img/cow.png';

const Daisy = {
    name: 'Daisy',
    age: 2,
    rarity: 1
};