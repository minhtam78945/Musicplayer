const sign_in_btn = document.getElementById("sign-in-btn");
const sign_up_btn = document.getElementById("sign-up-btn");
const containe = document.querySelector(".container")

sign_up_btn.addEventListener("click", function () {
    containe.classList.toggle("active");
});
sign_in_btn.addEventListener("click", function () {
    containe.classList.remove("active");
});