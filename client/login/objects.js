// DOM ELEMENTS
const loginForm = document.querySelector('#loginForm');
const usernameIn = document.querySelector('#username');
const passwordIn = document.querySelector('#password');
const loginBtn = document.querySelector('#loginBtn');

const signupForm = document.querySelector('#signupForm');
const nameIn = document.querySelector('#name');
const newUsernameIn = document.querySelector('#newUsername');
const emailIn = document.querySelector('#email');
const ageIn = document.querySelector('#age');
const newPasswordIn = document.querySelector('#newPassword');
const confirmPasswordIn = document.querySelector('#confirmPassword');
const signupBtnIn = document.querySelector('#signupBtn');

// USER OBJECTS
let USER = {
    username: '',
    name: '',
    email: '',
    age: '',
    password: '',
    level: '',
    items: [],
    cows: []
}

let existingUser = {
    username,
    password
}

let newUser = {
    name,
    username,
    email,
    age,
    password
};

let confirmPassword;
let expected;

const passwordChecker = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{8,})");