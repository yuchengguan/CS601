// Welcome Alert
function welcomeUser() {
    alert('Welcome to the calculator!');
    var username = prompt("What's your name?", '');
    while (username == '') {
        alert('Please enter your name and try again.');
        username = prompt("What's your name?", '');
    }
    alert('Welcome ' + username + ' !');
}

// Calculate
function sum(num1, num2) {
    var sum = num1 + num2;
    alert('The sum of your two numbers is: ' + sum);
    if (sum > 10) {
        alert('That is a big number.')
    } else {
        alert('That is a small number.')
    }
}


// Start Program 
function startButton() {
    welcomeUser();

    var reset = true;
    while(reset) {

        // enter the first number and check the data type
        var num1 = prompt('Please enter the first number: ', '');
        while(isNaN(num1)) {
            alert('Please check your input and try again.')
            num1 = prompt('Please enter the first number again: ', '');
        }

        // enter the second number and check the data type
        var num2 = prompt('Please enter the second number: ', '');
        while(isNaN(num2)) {
            alert('Please check your input and try again.')
            num2 = prompt('Please enter the first number again: ', '');
        }

        // calculate the sum
        sum(parseFloat(num1), parseFloat(num2));

        // reset the program
        var again = prompt("Try again? Enter 'yes' for yes, 'no' for no : ", '');
        if (again.toLowerCase() == 'yes') {
            continue;
        } else if (again.toLowerCase() == 'no') {
            alert('Thanks for using the calculator. See you.');
            reset = false;
        } else {
            alert('Something wrong with the input. The calculator will stop working.');
            reset = false;
        }
    }
}