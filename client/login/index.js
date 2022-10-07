const login = async (e) => {
    e.preventDefault();
    getValues();
    console.log(existingUser)
    if (await validLogin(existingUser.username, existingUser.password)) {
        console.log("valid login")
        localStorage.setItem("accountStored", 'yes');
        localStorage.setItem("username", existingUser.username)
        window.location.replace("../index.html")
    } else {
        console.log("Invalid Login Credentials");
        clearPasswords();
    }
}

const signup = (e) => {
    e.preventDefault();
    getValues();
    if (validSignup(newUser.username, newUser.password, confirmPassword)) {
        createUser(newUser);
        localStorage.setItem("accountStored", 'yes');
        localStorage.setItem("username", newUser.username);
        // window.location.replace('../index.html')
    } else if (userExists(newUser.username)) {
        clearUsernames();
    } else if(!validPasswords(newUser.password, confirmPassword)) {
        clearPasswords();
    }
}

const logout = async() => {
    if (localStorage.getItem("logout") === "yes"){
        let ACCOUNT = JSON.parse(localStorage.getItem("user"));
        let id = ACCOUNT._id;
        console.log(ACCOUNT);
        console.log(id)
        await axios.post(`/users/save/${id}`, ACCOUNT);
        localStorage.clear();
        // window.location.reload();
    }
}

loginBtn.addEventListener('click', login);
signupBtn.addEventListener('click', signup);