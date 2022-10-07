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
            console.log(cost, ACCOUNT.items[0].gem, ACCOUNT.items[0].CP);
        }
    }
    for (i = 0; i < maxVeg; i++){
        if (cost -3 >=0 && ACCOUNT.items[0].veg-1 >=0){
            cost -=3;
            ACCOUNT.items[0].CP -=3;
            ACCOUNT.items[0].veg -=1;
            console.log(cost, ACCOUNT.items[0].veg, ACCOUNT.items[0].CP);
        }
    }
    for (i = 0; i<maxBug; i++){
        if (cost -1 >=0 && ACCOUNT.items[0].bug -1 >=0){
            cost -=1;
            ACCOUNT.items[0].CP -=1;
            ACCOUNT.items[0].bug -=1;
            console.log(cost, ACCOUNT.items[0].bug, ACCOUNT.items[0].CP)
        }
    }
    console.log(ACCOUNT);
    localStorage.setItem("user", JSON.stringify(ACCOUNT));
    let id = localStorage.getItem("username");
    axios.post(`/users/save/${id}`, ACCOUNT).then(res => {
        console.log(res.data);
    }).catch(err => console.log(err));
}

const BUY_COW = async(cost) => {
    let gems = (cost % 5)*5;
    let vegs = 0;
    let bugs = 0;
    let remainder = cost - gems;
    if (remainder > 0) vegs = (remainder % 3)*3;
    if (remainder - vegs > 0) bugs = remainder-vegs;
    let ACCOUNT = JSON.parse(localStorage.getItem("user"));
    console.log(ACCOUNT);
    ACCOUNT.items[0].gem -= gems;
    ACCOUNT.items[0].veg -= vegs;
    ACCOUNT.items[0].bug -= bugs;
    ACCOUNT.items[0].CP -= cost;
    let param = localStorage.getItem("username");
    await PERSIST(param, ACCOUNT);
    await UPDATE_LOCAL(param);
};

const UPDATE_LOCAL = async(reqParam) => {
    await axios.get(`/users/get/${reqParam}`).then((res) => {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        console.log(localStorage.getItem("user"))
    }).catch((err) => console.log(err))
};

const PERSIST = async(reqParam, reqBody) => {
    await axios.post(`/users/save/${reqParam}`, reqBody).then((res) => {
        console.log(res.data)
    }).catch((err) => console.log(err))
};