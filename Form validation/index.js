var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    let name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Name is Required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write a Full name";
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true;
}

function validatePhone(){
    let phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone No is Required";
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "Please valid 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Please valid number";
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email is Required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Please enter a valid email";
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById("contact-message").value;
    let num = 30;
    let require = num - message.length;

    if(require > 0){
        messageError.innerHTML = require + " characters required";
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage() ){
        submitError.style.display = "block";
        submitError.innerHTML = "Please Fill the Form";
        setTimeout(() => {
            submitError.style.display = "none";
        },3000);
        return false;
    }
}
