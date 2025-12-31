function greetUser() {
    var name = document.getElementById("username").value;
    var message = document.getElementById("message");

    if (name === "") {
        message.textContent = "Please enter your name.";
        message.style.color = "red";
    } else {
        message.textContent = "Hello, " + name + "! Welcome.";
        message.style.color = "green";
    }
}
