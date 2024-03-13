//John Miles Ramos
//CMSC 100 U5L
//JavaScript Basics 1 - Password Validation Program

// Function to validate if two passwords match
function validatePassword(password1, password2) {
    if (password1 !== password2) {
        return false;
    }
    if (password1.length < 8) {
        return false;
    }
    var hasNumber = false;
    var hasLowercase = false;
    var hasUppercase = false;
    for (var i = 0; i < password1.length; i++) {
        var char = password1.charAt(i);
        if (!isNaN(char * 1)) {
            hasNumber = true;
        } else {
            if (char === char.toUpperCase()) {
                hasUppercase = true;
            }
            if (char === char.toLowerCase()){
                hasLowercase = true;
            }
        }
    }
    if (hasNumber && hasLowercase && hasUppercase) {
        return true;
    } else {
        return false;
    }
}

// Function to reverse a string
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

// Function to store the password to the object
function storePassword(name, password1, password2) {
    var isValid = validatePassword(password1, password2);
    var newPassword = isValid ? reverseString(password1) : password1;
    var person = {
        name: name,
        newpassword: newPassword
    };
    return person;
}

console.log(storePassword("John", "Pass1234", "Pass1234")); // returns {name: "John", newpassword:"4321ssaP"}
console.log(storePassword("John", "Pass123", "Pass12345")); // returns {name: "John", newpassword:"Pass123"}