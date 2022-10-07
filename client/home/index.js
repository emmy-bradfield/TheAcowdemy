const white = () => {
    COWBUILDER('white', 12)
};

const blue = () => {
    COWBUILDER('blue', 25)
};

const green = () => {
    COWBUILDER('green', 40)
};

const purple = () => {
    COWBUILDER('purple', 60)
};

const gold = () => {
    COWBUILDER('gold', 85)
};


const rarityGenerator = (colour) => {
    console.log(`${colour} chosen`)
    let val = Math.random();
    switch(colour){
        case 'white':
            if (val >= 0.4) return 1
            else if (val >= 0.1) return 2
            else return 3
            break;
        case 'blue':
            if (val >= 0.45) return 1
            else if (val >= 0.2) return 2
            else return 3
            break;
        case 'green':
            if (val >= 0.45) return 1
            else if (val >= 0.2) return 2
            else if (val >= 0.05) return 3
            else if (val >= 0.01) return 4
            else return 5
            break;
        case 'purple':
            if (val >= 0.6) return 1
            else if (val >= 0.5) return 2
            else if (val >= 0.25) return 3
            else if (val >= 0.05) return 4
            else return 5
            break;
        case 'gold':
            if (val >= 0.7) return 1
            else if (val >= 0.50) return 2
            else if (val >= 0.25) return 3
            else if (val >= 0.1) return 4
            else return 5
            break;
    
    }
}

const enough_cp = (cost) => {
    if (INVENTORY.CP >= cost) return true
}

const BUILD_COW = (colour, price) => {
    let name = prompt("Enter a name for your cow!")
    let age = Math.round(Math.random()*10);
    let rarity = rarityGenerator(colour)
    let cost = price
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

const COWBUILDER = async(colour, cost) => {
    if(enough_cp(cost)){
        let COW = BUILD_COW(colour, cost);
        UPDATE_ACCOUNT(cost, COW)

    } else {
        window.alert("You cannot afford a new cow")
    }
};

const getCP = () => {
    ACCOUNT = JSON.parse(localStorage.getItem("user"))
    INVENTORY = ACCOUNT.items[0]
};

whiteBox.addEventListener("click", white);
blueBox.addEventListener("click", blue);
greenBox.addEventListener("click", green);
purpleBox.addEventListener("click", purple);
goldBox.addEventListener("click", gold);

window.addEventListener("load", getCP)

function animate() {
    window.requestAnimationFrame(animate);

    BACKGROUND.draw();
}

animate();
