const userDiv = document.querySelector('#users-text')
const usernameTxt = document.querySelector('#user');
const levelTxt = document.querySelector('#level');

const itemsDiv = document.querySelector('#items-text');
const veg = document.querySelector('#veg');
const bug = document.querySelector('#bug');
const gem = document.querySelector('#gem');

const child = document.querySelector('#child');

const logoutBtn = document.querySelector('#logOut');

const updateItems = () => {
    veg.textContent = `${String(INVENTORY.plants).padStart(3, 0)}`;
    bug.textContent = `${String(INVENTORY.bugs).padStart(3, 0)}`;
    gem.textContent = `${String(INVENTORY.coins).padStart(3, 0)}`;
};

const logout = () => {
    console.log("logout attempted");
    localStorage.setItem("logout", "yes");
    window.location.replace('./login');
};

logoutBtn.addEventListener('click', logout);