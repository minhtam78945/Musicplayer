const sign_in_btn = document.getElementById("sign-in-btn");
const sign_up_btn = document.getElementById("sign-up-btn");
const containe = document.querySelector(".container")

sign_up_btn.addEventListener("click", function () {
    containe.classList.toggle("active");
});
sign_in_btn.addEventListener("click", function () {
    containe.classList.remove("active");
});
const from = document.querySelector(".sign-up-form")
const email = from.querySelector(".email-field");
const emailInput = email.querySelector("#email-sginup");
const password = from.querySelector(".Create_password");
const passwordInput = password.querySelector("#password-signup")
const Confirm_pass = from.querySelector(".Confirm_Password");
const Confirm_PasswordInput = Confirm_pass.querySelector("#cofirm-signup")

console.log(from);
// check Email
function checkmail() {
    const emialpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emialpattern)) {
        return email.classList.add("Invaild");
    }
    email.classList.remove("Invaild");
}
// Show the passwrod;
const eyeIcon = document.querySelectorAll(".fa-eye-slash");
eyeIcon.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", function () {
        const input = eyeIcon.parentElement.querySelector("input");
        if (input.type === "password") {
            eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
            return (input.type = "text");
        }
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        input.type = "password";
    });
});
//check the length for the password; 
from.addEventListener("submit", function (e) {
    e.preventDefault();
    checkmail();
    emailInput.addEventListener("keyup", checkmail);

});
