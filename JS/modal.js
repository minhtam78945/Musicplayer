var openmodal = document.getElementById("btn-modal");
console.log(openmodal);
var modal = document.querySelector(".modal")

function hide(e) {
    modal.classList.toggle("hide");
}
openmodal.addEventListener("click", function () {
    modal.classList.toggle("hide");
});
modal.addEventListener("click", function (e) {
    if (e.target == e.currentTarget) {
        hide();
    }
});
