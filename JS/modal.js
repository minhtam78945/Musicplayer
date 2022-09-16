var openmodal = document.getElementById("btn-modal");
console.log(openmodal);
var modal = document.querySelector(".modal")
var btnclose = document.getElementById("close");
function hide(e) {
    modal.classList.toggle("hide");
}
openmodal.addEventListener("click", function () {
    modal.classList.toggle("hide");
});
btnclose.addEventListener("click", hide)
modal.addEventListener("click", function (e) {
    if (e.target == e.currentTarget) {
        hide();
    }
});
