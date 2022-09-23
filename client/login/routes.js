const createUser = (reqBody) => {
    axios.post('/users/signup', reqBody).then(res => console.log(res)).catch(err => console.log(err));
};

const getUser = (reqParam) => {
    axios.get(`/users/get/${reqParam}`).then(res => {
        if (res.data !== null) {
            const USER = {
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

const getPassword = (reqParam) => {
    axios.get(`/users/get/${reqParam}`).then(res => expected = res.data.password).catch(err => console.log(err));
    return expected;
}
