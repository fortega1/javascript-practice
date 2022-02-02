function validPassword() {
    const userPassword = prompt("Enter a Password");
    const re = /[0-9]*/;
    if (userPassword[0] === "" || userPassword.slice(0,1) === re) {
        alert("Password must begin with a letter!");
    } else if (userPassword.length < 6) {
        alert("Password must contain AT LEAST six characters!");
    } else if (userPassword.length > 20) {
        alert("Password can not contain MORE than twenty characters!");
    }
   
 
}