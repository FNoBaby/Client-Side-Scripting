window.onload = function () {
    var input1 = document.getElementById('input1');
    var input2 = document.getElementById('input2');
    var input3 = document.getElementById('input3');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('password-confirm');

    input1.addEventListener('mouseenter', function () {
        input1.placeholder = "Mouse Hover";
    });

    input2.addEventListener('mouseleave', function () {
        input2.placeholder = "Mouse is over the text box";
    });

    input1.addEventListener('mouseleave', function () {
        input1.value = "";
    });

    input2.addEventListener('mouseleave', function () {
        input1.value = "";
    });

    input3.addEventListener('focus', function () {
        input3.placeholder = "Focused";
    });

    username.addEventListener('blur', function () {
        checkUsername();
    });

    password.addEventListener('blur', function () {
        checkPassword();
    });

    confirmPassword.addEventListener('blur', function () {
        checkConfirmPassword();
    });
}

function checkUsername() {
    var username = document.getElementById('username');
    var error = document.getElementById('error');
    if (username.value == "") {
        error.innerHTML = "Username is required";
    } else
        if (username.value.length < 5) {
            error.innerHTML = "Username must be atleast 5 characters";
        } else {
            error.innerHTML = "";
        }
}

function checkPassword() {
    var password = document.getElementById('password');
    var error = document.getElementById('error');
    var specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.value == "") {
        error.innerHTML = "Password is required";
    } else
        if (password.value.length < 6) {
            error.innerHTML = "Password must be atleast 6 characters";
        } else
            if (!specialCharPattern.test(password.value)) {
                error.innerHTML = "Password must contain at least one special character";
            } else {
                error.innerHTML = "";
            }
}

function checkConfirmPassword() {
    var confirmPassword = document.getElementById('password-confirm');
    var error = document.getElementById('error');

    if (password.value != confirmPassword.value) {
        error.innerHTML = "Password does not match";
    } else {
        error.innerHTML = "";
    }
}