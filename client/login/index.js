const login = (e) => {
    e.preventDefault();
    getValues();
    if (validLogin(existingUser.username, existingUser.password)) {
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
        window.location.replace('../index.html')
    } else if (userExists(newUser.username)) {
        clearUsernames();
    } else if(!validPasswords(newUser.password, confirmPassword)) {
        clearPasswords();
    }
}

loginBtn.addEventListener('click', login);
signupBtn.addEventListener('click', signup);