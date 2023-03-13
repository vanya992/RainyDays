const email = document.getElementById(email);
const main = document.querySelector("main_home")

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const emailMatches = regEx.test(email);
    return emailMatches;
};

validateEmail();

