const checkLogin = () => {
    console.log("checkLogin() started")
    const isLogged = localStorage.getItem("log")
    if (isLogged === 'true') {
        console.log("logged in: true")
        axios.get(`/users/get/${localStorage.getItem("user")}`).then(res => {
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
        window.location.replace('/main');
    } else {
        console.log("not logged in");
        // window.location.replace('/account')
    }
}

window.addEventListener('load', checkLogin);