const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const functions = document.querySelectorAll('.function');
numbers.forEach(number => number.addEventListener('click', newNumber));
operators.forEach(operator => operator.addEventListener('click', newOperator));
functions.forEach(funct => funct.addEventListener('click', newFunction));

function newNumber(e) {
    display.textContent += e.target.textContent;
    return;
}

function newOperator(e) {
    display.textContent += e.target.textContent;
    return;
}

function newFunction(e) {
    display.textContent += e.target.textContent;
    return;
}
