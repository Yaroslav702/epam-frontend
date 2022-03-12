const PASSWORD = 12345;
let loginInput = prompt("Enter your login:");
let passwordInput;

if (loginInput !== "Admin" || loginInput === null) {
    alert("Access is forbidden!")
} else if (loginInput == "Admin") {
    passwordInput = prompt("Enter your password:");
    if (passwordInput == PASSWORD) {
        alert("Welcome!");
    } else {
        alert("Wrong password!");
    }
}

