const rarityGenerator = () => {
    let val = Math.random();
    if (val >= 0.6 ) return 1
    else if (val >= 0.4) return 2
    else if (val >= 0.27) return 3
    else if (val >= 0.15) return 4
    else return 5
}

const BUILD_COW = () => {
    if (INVENTORY.CP <= 50){
        window.alert("you are too poor to buy a cow!")
    } else {
        let name = prompt("Enter a name for your cow!")
        let age = Math.round(Math.random()*10);
        let rarity = rarityGenerator()
        let cost = 50
        let image = '../assets/img/cow.png'
        let NEWCOW = {
            _id: name,
            age: age,
            rarity: rarity,
            cost: cost,
            image: image
        }
        axios.post(`http://localhost:4000/users/add-cow/${localStorage.getItem("username")}`, NEWCOW).then(res => {
            console.log(res.data);
            window.alert(`NEW COW ADDED!: ${JSON.stringify(res.data)}`)
        }).catch((err) => console.log(err));
    }
};

const getCP = () => {
    ACCOUNT = JSON.parse(localStorage.getItem("user"))
    INVENTORY = ACCOUNT.items[0]
    console.log(INVENTORY);
};

buildCow.addEventListener("click", BUILD_COW);
window.addEventListener("load", getCP)

function animate() {
    window.requestAnimationFrame(animate);

    BACKGROUND.draw();
}

animate();
