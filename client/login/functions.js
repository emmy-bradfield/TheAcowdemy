// DOM MANIPULATION
const getValues = () => {
    existingUser.username = usernameIn.value;
    existingUser.password = passwordIn.value;
    newUser.name = nameIn.value;
    newUser.username = newUsernameIn.value;
    newUser.email = emailIn.value;
    newUser.age = ageIn.value;
    newUser.password = newPasswordIn.value;
    confirmPassword = confirmPasswordIn.value;
}

const clearFields = () => {
    usernameIn.value = '';
    passwordIn.value = '';
    newUsernameIn.value = '';
    emailIn.value = '';
    ageIn.value = '';
    newPasswordIn.value = '';
    confirmPasswordIn.value = '';
}

const clearPasswords = () => {
    passwordIn.value = '';
    newPasswordIn.value = '';
    confirmPasswordIn.value = '';
}

const clearUsernames = () => {
    usernameIn.value = '';
    newUsernameIn.value = '';
}

// VALIDATION CHECKS
const userExists = (username) => {
    getUser(username);
    return (USER.username !== '');
};

const correctPassword = (username, password) => {
    return(getPassword(username) === password);
};

const validPasswords = (passwordOne, passwordTwo) => {
    if(!passwordOne === passwordTwo) {
        window.alert("Passwords must match");
        return false;
    } else if (!passwordChecker.test(passwordOne)){
        window.alert("Passwords must be 8 or more characters, and contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character (. ! @ # $ % ^ & *)");
        return false;
    } else return true;
};

const validLogin = (username, password) => {
    if (userExists(username)) return correctPassword(username, password);
    else return false;
}

const validSignup = (username, passwordOne, passwordTwo) => {
    if(userExists(username)) {
        return false;
    }
    else if (validPasswords(passwordOne, passwordTwo)) {
        return true;
    }
    else {
        return false;
    }
};