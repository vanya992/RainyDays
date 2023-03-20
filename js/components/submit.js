const mail = document.getElementById("email");

const message = document.querySelector("error-message");

const emailConfirm = document.querySelector("email_form")

function validateEmail(mail) {
    const regEx = /\S+@\S+\.\S+/;
    const emailMatches = regEx.test(mail);
    return emailMatches;
};



function validateForm(event) {

    event.preventDefault();

    let isInputValid = true;

    if (validateEmail(mail.value) === true) {
        message.style.fontSize = "5px"
        message.style.border = "5px solid green";
        message.innerHTML = "You are succesfully subscribed to our newsletter.";
    } else {
        mail.style.border = "5px solid red";
        message.innerHTML = "Please, enter a valid email.";
        isInputValid = false;
    }
    if (isInputValid === true) {
    console.dir("success")
    } else {
        console.log("failure")
}

}
validateForm()



