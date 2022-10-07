const UPDATE_ACCOUNT = async(cost, COW) => {
    ACCOUNT.cows.push(COW);
    let maxGems = ACCOUNT.items[0].gem;
    let maxVeg = ACCOUNT.items[0].veg;
    let maxBug = ACCOUNT.items[0].bug;
    for (i = 0; i < maxGems; i++){
        if (cost-5 >= 0 && ACCOUNT.items[0].gem-1 >= 0){
            cost -= 5;
            ACCOUNT.items[0].CP -=5;
            ACCOUNT.items[0].gem -= 1;
        }
    }
    for (i = 0; i < maxVeg; i++){
        if (cost -3 >=0 && ACCOUNT.items[0].veg-1 >=0){
            cost -=3;
            ACCOUNT.items[0].CP -=3;
            ACCOUNT.items[0].veg -=1;
        }
    }
    for (i = 0; i<maxBug; i++){
        if (cost -1 >=0 && ACCOUNT.items[0].bug -1 >=0){
            cost -=1;
            ACCOUNT.items[0].CP -=1;
            ACCOUNT.items[0].bug -=1;
        }
    }
    localStorage.setItem("user", JSON.stringify(ACCOUNT));
    let id = localStorage.getItem("username");
    axios.post(`/users/save/${id}`, ACCOUNT).then(res => {
        console.log(res.data);
    }).catch(err => console.log(err));
};