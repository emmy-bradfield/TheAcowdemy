const userDiv = document.querySelector('#users-text')
const username = document.querySelector('#user');
const level = document.querySelector('#level');

const itemsDiv = document.querySelector('#items-text');
const veg = document.querySelector('#veg');
const bug = document.querySelector('#bug');
const gem = document.querySelector('#gem');

const logoutBtn = document.querySelector('#logOut');

const updateItems = () => {
    veg.textContent = `${String(INVENTORY.plants).padStart(3, 0)}`;
    bug.textContent = `${String(INVENTORY.bugs).padStart(3, 0)}`;
    gem.textContent = `${String(INVENTORY.coins).padStart(3, 0)}`;
}

const logout = () => {
    localStorage.clear();
    window.location.replace('../index.html');
}

logoutBtn.addEventListener('click', logout);