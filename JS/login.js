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
    function validate(InputElement, rule) {
        var ErrorElement = InputElement.parentElement.querySelector(object.Error);
        if (InputElement) {
            InputElement.onblur = function () {
                // get the value : InputElem                                ent.value;
                // test fun : fun
                var errorMEss = rule.test(InputElement.value);
                if (errorMEss) {
                    ErrorElement.innerText = errorMEss;
                    InputElement.parentElement.classList.add("Invaild");
                }
                else {
                    ErrorElement.innerText = "";
                    InputElement.parentElement.classList.remove("Invaild");
                }
            }

        }

    }
    var formElement = document.querySelector(object.form);
    if (formElement) {
        object.rules.forEach(function (rule) {
            var InputElement = formElement.querySelector(rule.selector);
            if (InputElement) {
                InputElement.onblur = function () {
                    validate(InputElement, rule);
                }
                var ErrorElement = InputElement.parentElement.querySelector(object.Error);
                InputElement.oninput = function () {
                    ErrorElement.innerText = " ";
                    InputElement.parentElement.classList.remove("Invaild");
                }
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
            return value.trim() ? undefined : 'Please enter your account name'

        }
    }
}
Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            var rex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return rex.test(value) ? undefined : "Please enter valid email"

        }
    }
}