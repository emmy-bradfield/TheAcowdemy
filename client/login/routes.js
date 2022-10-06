const createUser = async(reqBody) => {
    await axios.post('http://localhost:4000/users/signup', reqBody).then(res => console.log(res)).catch(err => console.log(err));
};

const getUser = async (reqParam) => {
    await axios.get(`http://localhost:4000/users/get/${reqParam}`).then(res => {
        console.log(res.data)
        if (res.data !== null) {
            localStorage.setItem("user", JSON.stringify(res.data))
            console.log(res.data)
            console.log(USER)
            USER = {
                username: res.data._id,
                name: res.data.name,
                email: res.data.email,
                age: res.data.age,
                password: res.data.password,
                level: res.data.level,
                items: res.data.items,
                cows: res.data.cows
            }
        }
    }).catch(err => console.log(err));
}

const getPassword = async(reqParam) => {
    await axios.get(`http://localhost:4000/users/get/${reqParam}`).then(res => expected = res.data.password).catch(err => console.log(err));
    return expected;
}
