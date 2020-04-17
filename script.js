//Select display and add event listeners to the buttons
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
    calculation[calculation.length - 1] += e.target.textContent
    display.textContent += e.target.textContent;
    return;
}

function newOperator(e) {
    calculation.push(e.target.textContent);
    calculation.push('');
    display.textContent += e.target.textContent;
    return;
}

function enter() {
    calculation = calculate(calculation);
    display.textContent = calculation[0];
    return;
}

function clear() {
    calculation = [''];
    display.textContent = '';
    return;
}

function back() {
    if (calculation[calculation.length -1] === '') {
        calculation.pop();
        calculation.pop();
    } else {
        calculation[calculation.length -1] = calculation[calculation.length -1].slice(0,-1);
    }
    display.textContent = display.textContent.slice(0,-1);
    return;
}

isPriorityOperation = (str) => (str === '/' || str === '*');
// Returns true is it is a high priority calculation

isLowPriorityOperation = (str) => (str === '+' || str === '-');

function calculate(calculation) {
    if (calculation.some(str => (str === '')) ) {
        return 'ERROR';
    }
    while (calculation.some(isPriorityOperation)) {
        const index = calculation.findIndex(isPriorityOperation);
        let result;
        if (calculation[index] === '*') {
            result = calculation[index-1] * calculation[index+1];
        } else {
            result = calculation[index-1] / calculation[index+1];
        }
        calculation.splice(index-1, 3, result);
    }
    while (calculation.some(isLowPriorityOperation)) {
        const index = calculation.findIndex(isLowPriorityOperation);
        let result;
        if (calculation[index] === '+') {
            result = +calculation[index-1] + +calculation[index+1];
        } else {
            result = calculation[index-1] - calculation[index+1];
        }
        calculation.splice(index-1, 3, result);
    }
    return calculation;
}



let calculation = [''];