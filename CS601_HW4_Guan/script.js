const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const facilitator = document.getElementById('facilitator');
const form = document.getElementById('form')

const re = /^[A-Za-z]+$/;

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
    if(!input.value.match(re)) {
        showError(input, getInputName(input) + ' is not valid');
        return false;
    } else {
        return true;
    }
}

// check name length
function checkLength(input) {
    if(input.value.length < 2) {
        showError(input, getInputName(input) + ' must be more than 2 characters');
        return false;
    } else {
        return true;
    }
}

// check facilitator name
function checkFacilitator(input) {
    if(!(input.value.toLowerCase() === 'fazil' || input.value.toLowerCase() === 'josh' || 
    input.value.toLowerCase() === 'christian')) {
        showError("Please enter the correct facilitator's name this semester");
        return false;
    } else {
        return true;
    }

}

// check inputs
function formValidation() {
    var isChecked = true;
    if(!(checkName(firstName) && checkName(lastName) && checkLength(firstName) && 
    checkLength(lastName) && checkFacilitator(facilitator))) {
        isChecked = false;       
    } else {
        isChecked = true;
    }
    return isChecked;

    // checkName(firstName);
    // checkName(lastName);
    // checkLength(firstName);
    // checkLength(lastName);
    // checkFacilitator(facilitator); 

}

// form.addEventListener('submit', formValidation);

// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     if(checkName(firstName) && checkName(lastName) && checkLength(firstName) && 
//     checkLength(lastName) && checkFacilitator(facilitator)) {
//         form.submit();
//     }
// });

