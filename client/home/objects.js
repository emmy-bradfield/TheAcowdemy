// CANVAS
const canvas = document.querySelector('canvas');
canvas.width = 1024;
canvas.height = 576;

const ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, canvas.width, canvas.height);

// IMAGES
// --static
const display = new Image();
display.src = '../assets/img/home.png';

// DOM
const whiteBox = document.querySelector('#whiteBox');
const blueBox = document.querySelector('#blueBox');
const greenBox = document.querySelector('#greenBox');
const purpleBox = document.querySelector('#purpleBox');
const goldBox = document.querySelector('#goldBox');

// IN-GAME ITEMS
let ACCOUNT;

let INVENTORY;

let COWS = [];

const Daisy = {
    name: 'Daisy',
    age: 2,
    rarity: 1
};