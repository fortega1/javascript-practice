function validatePassword() {
    const userPassword = prompt("Enter a Password");
    const re = new RegExp(/^[a-zA-Z]/);
    if (!re.test(userPassword)) {
        alert("Password must begin with a letter!");
    } else if (userPassword.length < 6) {
        alert("Password must contain AT LEAST six characters!");
    } else if (userPassword.length > 20) {
        alert("Password can not contain MORE than twenty characters!");
    }
 
}