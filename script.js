const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
numbers.forEach(number => number.addEventListener('click', newNumber));
operators.forEach(operator => operator.addEventListener('click', newOperator));
const enterButton = document.querySelector('#enter');
const clearButton = document.querySelector('#clear');
const backButton = document.querySelector('#back');
enterButton.addEventListener('click', enter);
clearButton.addEventListener('click', clear);
backButton.addEventListener('click', back);

function newNumber(e) {
    display.textContent += e.target.textContent;
    return;
}

function newOperator(e) {
    display.textContent += e.target.textContent;
    return;
}

function enter(e) {
    display.textContent += e.target.textContent;
    return;
}

function clear(e) {
    display.textContent = '';
    return;
}


function back(e) {
    display.textContent = display.textContent.slice(0,-1);
    return;
}

