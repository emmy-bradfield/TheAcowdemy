const checkLogin = () => {
    console.log("checkLogin() started")
    const isLoggedIn = localStorage.getItem("accountStored")
    if (isLoggedIn === 'yes') {
        console.log("logged in: true")
        axios.get(`/users/get/${localStorage.getItem("username")}`).then(res => {
            const readItems = JSON.stringify(res.data.items);
            const readCows = JSON.stringify(res.data.cows);
            const USER = {
                username: res.data._id,
                name: res.data.name,
                email: res.data.email,
                level: res.data.level,
                items: JSON.parse(readItems),
                cows: JSON.parse(readCows)
            };
            localStorage.setItem("USER", JSON.stringify(USER));
            console.log(USER)
        }).catch((err) => console.log(err));
    } else {
        console.log("not logged in");
        window.location.replace('/login')
    }
}

window.addEventListener('load', checkLogin);

function animate() {
    window.requestAnimationFrame(animate);

    MAP.draw();
    INTERACTIVE_OBJECTS.forEach(object => object.draw());
    PLAYER.draw();
    BOUNDS.forEach(bound => bound.draw());
    FOREGROUND.draw();
    UI.draw();
    
    moving = true;
    PLAYER.moving = false;
    HOME_DOOR.active = false;
    BARN_DOOR.active = false;
    HUT_DOOR.active = false;
    CHEST.active = false;
    MAIN_GATE.active = false;
    SECOND_GATE.active = false;

    goHome();
    goBarn();
    goHut();
    openChest();
    updateItems();
    
    window.addEventListener('keydown', keyDownEvent);
    window.addEventListener('keyup', keyUpEvent);

    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
        leave();
        sailHome();
        collect();
        gateAnimations();
    }
    
    if (keys.w.pressed && lastKey === 'w') moveUp();
    else if (keys.a.pressed && lastKey === 'a') moveLeft();
    else if (keys.s.pressed && lastKey === 's') moveDown();
    else if (keys.d.pressed && lastKey === 'd') moveRight();

};

animate();
