const sign_in_btn = document.getElementById("sign-in-btn");
const sign_up_btn = document.getElementById("sign-up-btn");
const containe = document.querySelector(".container")

sign_up_btn.addEventListener("click", function () {
    containe.classList.toggle("active");
});
sign_in_btn.addEventListener("click", function () {
    containe.classList.remove("active");
});
// OOp ELEMENT
function Validator(object) {
    var formElement = document.querySelector(object.form);
    if (formElement) {
        object.rules.forEach(function (rule) {
            var InputElement = formElement.querySelector(rule.selector);
            if (InputElement) {
                InputElement.onblur = function () {
                    // get the value : InputElement.value;
                    // test fun : fun
                    var errorMEss = rule.test(InputElement.value);
                    if (errorMEss) {
                    }
                }
                console.log(InputElement.parentElement.querySelector('.error'));
            }
        });
    }
}
// Dinh nghia cac rules
// two 2 op
// when have error ==> return messgae error
// when not have eror == > retyủn 0
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường hợp này'

        }
    }
}
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {

        }
    }
}