const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const phone = document.getElementById('phone');
const form = document.getElementById('form');
const input = document.querySelectorAll('input');

// show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-container error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}   

// get input field name
function getInputName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check name value
function checkName(input) {
    const nameRegex = /^[A-Za-z]+$/;
    if(!input.value.match(nameRegex)) {
        showError(input, getInputName(input) + ' is not valid');
        return false;
    } else {
        return true;
    }
}

// check phone value
function checkPhone(input) {
    const phoneRegex = /^[2-9]\d{2}-\d{3}-\d{4}$/;
    if(!input.value.match(phoneRegex)) {
        showError(input, getInputName(input) + ' is not valid');
        return false;
    } else {
        return true;
    }
}

// reset button
function formReset() {
    // clean border
    for (var i = 0; i <input.length; i++) {
        input[i].style.setProperty('border', '1px solid');
    };

    // clean error message
    const small = document.querySelectorAll('small');
    for (var j = 0; j <small.length; j++) {
        small[j].style.visibility = 'hidden';
    };

    form.reset();
}

// input focus
input.onfocus = function() {
    input.style.setProperty('border', '1px solid');
    const small = document.querySelectorAll('small');
    small.style.visibility = 'hidden';
}

// check inputs
function formValidation() {
    var flag = checkName(firstName) && checkName(lastName) && checkPhone(phone);
    return flag;
}