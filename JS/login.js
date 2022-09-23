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
const EyeIcon = document.querySelectorAll('.fa-eye-slash');
console.log(EyeIcon);
EyeIcon.forEach(EyeIcon => {
    EyeIcon.addEventListener("click", function () {
        const input = EyeIcon.parentElement.querySelector("input");
        console.log(input);
        if (input.type === "password") {
            EyeIcon.classList.replace("fa-eye-slash", "fa-eye");
            return (input.type = "text");
        }
        EyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        input.type = "password";
    });

});
function Validator(object) {
    var selectorRules = {};

    function validate(InputElement, rule) {
        var ErrorElement = InputElement.parentElement.querySelector(object.Error);
        var errorMEss;
        var rules = selectorRules[rule.selector]; // lúc này nó lặp qua từng rule
        for (var i = 0; i < rules.length; ++i) {
            errorMEss = rules[i](InputElement.value);
            if (errorMEss) {
                break;
            }
        }
        if (errorMEss) {
            ErrorElement.innerText = errorMEss;
            InputElement.parentElement.classList.add("Invaild");
        }
        else {
            ErrorElement.innerText = "";
            InputElement.parentElement.classList.remove("Invaild");
        }
        return !errorMEss;


    }
    var formElement = document.querySelector(object.form);
    if (formElement) {
        // when sumbit form
        formElement.onsubmit = function (e) {
            e.preventDefault();
            var isFormValid = true;
            object.rules.forEach(function (rule) {
                var InputElement = formElement.querySelector(rule.selector);
                var isValid = validate(InputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }

            });
            if (isFormValid) {
                toast({
                    title: `Success`,
                    message: `Đăng ký thành công`,
                    type: `success`,
                    duation: 1000
                });
            }
            else {
                toast({
                    title: `Error`,
                    message: `Đăng ký Thất bại`,
                    type: `error`,
                    duation: 1000
                });
            }
        }

        // lap ra qua moi rules
        object.rules.forEach(function (rule) {
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            }
            else {
                selectorRules[rule.selector] = [rule.test];
            }
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
        console.log(selectorRules);
    }
}
// Dinh nghia cac rules
// two 2 op
// when have error ==> return messgae error
// when not have eror == > retyủn 0
Validator.isRequired = function (selector, messgae) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : messgae || 'Please enter your account name'

        }
    }
}
Validator.isEmail = function (selector, messgae) {
    return {
        selector: selector,
        test: function (value) {
            var rex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return rex.test(value) ? undefined : messgae || "Please enter valid email"

        }
    }
}
Validator.minlength = function (selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Minimum password is at least ${min}`;
        }
    }
}
Validator.isCofrim = function (selector, getCofirmPass, messgae) {
    return {
        selector: selector,
        test: function (value) {
            return value === getCofirmPass() ? undefined : messgae || 'Giá trị nhập vào không chính xác';
        }
    }
}