const rarityGenerator = () => {
    let val = Math.random();
    if (val >= 0.6 ) return 1
    else if (val >= 0.4) return 2
    else if (val >= 0.27) return 3
    else if (val >= 0.15) return 4
    else return 5
}

const enough_cp = () => {
    if (INVENTORY.CP >= 50) return true
}

const BUILD_COW = () => {
    let name = prompt("Enter a name for your cow!")
    let age = Math.round(Math.random()*10);
    let rarity = rarityGenerator()
    let cost = 50
    let image = '../assets/img/cow.png'
    let COW = {
        _id: name,
        age: age,
        rarity: rarity,
        cost: cost,
        image: image
    }
    return COW;
};

const COWBUILDER = async() => {
    if(enough_cp){
        let COW = BUILD_COW();
        UPDATE_ACCOUNT(50, COW)

    } else {
        window.alert("You cannot afford a new cow")
    }
};

const getCP = () => {
    ACCOUNT = JSON.parse(localStorage.getItem("user"))
    INVENTORY = ACCOUNT.items[0]
    console.log(INVENTORY);
};

buildCow.addEventListener("click", COWBUILDER);
window.addEventListener("load", getCP)

function animate() {
    window.requestAnimationFrame(animate);

    BACKGROUND.draw();
}

animate();
