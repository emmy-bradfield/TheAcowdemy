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
const userExists = async(username) => {
    await getUser(username);
    console.log(username);
    console.log(USER.username);
    return (USER.username !== '');
};

const correctPassword = async(username, password) => {
    let expected = await getPassword(username);
    return(expected === password);
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

const validLogin = async (username, password) => {
    let real = await userExists(username)
    if (real) {
        console.log("user exists\n", USER);
        return correctPassword(username, password);
    }
    else return false;
}

const validSignup = async(username, passwordOne, passwordTwo) => {
    let exists = await userExists(username)
    if(exists) {
        return false;
    }
    else if (validPasswords(passwordOne, passwordTwo)) {
        return true;
    }
    else {
        return false;
    }
};