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
function Createpassword() {
    const password_patter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordInput.value.match(password_patter)) {
        return password.classList.add("Invaild");
    }
    password.classList.remove("Invaild");
}
function Confirmpass() {
    if (passwordInput.value !== Confirm_PasswordInput.value || Confirm_PasswordInput.value === "") {
        return Confirm_pass.classList.add("Invaild");
    }
    Confirm_pass.classList.remove("Invaild");

}
from.addEventListener("submit", function (e) {
    e.preventDefault();
    checkmail();
    Createpassword();
    Confirmpass();
    emailInput.addEventListener("keyup", checkmail);
    passwordInput.addEventListener("keyup", Createpassword);
    Confirm_PasswordInput.addEventListener("keyup", Confirmpass);

});
const form_sign_in = document.querySelector(".sign-in-form");
form_sign_in.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (!username) {
        toast({
            title: `Error`,
            message: `Vui lòng nhập tài khoản`,
            type: `error`,
            duation: 3000
        });
    }
    else if (!password) {
        toast({
            title: `Error`,
            message: `Vui lòng nhập mật khẩu`,
            type: `error`,
            duation: 3000
        });
    }
    
})