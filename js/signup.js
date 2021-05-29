const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const nameError = document.querySelector("#nameError");
const subectError = document.querySelector("#subjectError");
const emailError = document.querySelector("#emailError");
const addressError = document.querySelector("#addressError");
const button = document.querySelector ("#submit")

var errorInForm = nameError || emailError || addressError; 

function formValidation(event) {
    event.preventDefault();

    if (fullName.value.length > 0) {
        nameError.style.display = "none";
    } else {
        (nameError.style.display = "block") && (errorInForm === true);
    
    }
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        (emailError.style.display = "block") && (errorInForm === true);
    }

    if (address.value.length >= 25) {
        addressError.style.display = "none";
    } else {
        (addressError.style.display = "block") && (errorInForm === true);
    }
}

errorInForm === false;


function submitForm(event) {
    event.preventDefault();
    message.innerHTML = '<div class="message">Your account was successfully created!</div>';
    form.reset();
}

function error () {
    if (errorInForm === true) {
        formValidation;
        } else {submitForm};
}

button.addEventListener ("click", error);




function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}