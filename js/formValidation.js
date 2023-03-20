const form = document.querySelector("form")
const userName = document.getElementById("userName");
const userNameError = document.getElementById("error-userName");
const email = document.getElementById("email");
const errorEmail = document.getElementById("error-email");
const message = document.getElementById("message");
const errorMessage = document.getElementById("error-message");
const success = document.getElementById("success");


function validateForm() {
    event.preventDefault();

    let showSuccessMsg = true;

    if (checkLength(userName.value, 1) === true) {
       userNameError.style.display = "none";
    } else {
        userNameError.style.display = "block";
        showSuccessMsg = false;
    };

    if (validateEmail(email.value) === true) {
        errorEmail.style.display = "none";
    } else {
        errorEmail.style.display = "block";
        showSuccessMsg = false;
    }

    if (checkLength(message.value, 10) === true) {
        errorMessage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
        showSuccessMsg = false;
    }

    if (showSuccessMsg) {
        success.innerHTML = `<div id="success">Your message is sent. Thank you for your interess.</div>`;
        form.reset();
    } else {
        success.innerHTML = "";
    }
}

form.addEventListener("send", validateForm);


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const emailMatches = regEx.test(email);
    return emailMatches;
};
