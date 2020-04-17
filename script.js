//Select display and add event listeners to the buttons
const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
numbers.forEach(number => number.addEventListener('click', clickNumber));
operators.forEach(operator => operator.addEventListener('click', clickOperator));
const enterButton = document.querySelector('#enter');
const clearButton = document.querySelector('#clear');
const backButton = document.querySelector('#back');
enterButton.addEventListener('click', enter);
clearButton.addEventListener('click', clear);
backButton.addEventListener('click', back);
window.addEventListener('keydown', keyPress);


function clickNumber(e) {
    newNumber(e.target.textContent);
}

function newNumber(str) {
    calculation[calculation.length - 1] += str;
    display.textContent += str;
}

function clickOperator(e) {
    newOperator(e.target.textContent);
}

function newOperator(str) {
    calculation.push(str);
    calculation.push('');
    display.textContent += str;
}

function enter() {
    calculation = calculate(calculation);
    display.textContent = calculation[0];
}

function clear() {
    calculation = [''];
    display.textContent = '';
}

function back() {
    if (calculation[calculation.length -1] === '') {
        calculation.pop();
        calculation.pop();
    } else {
        calculation[calculation.length -1] = calculation[calculation.length -1].slice(0,-1);
    }
    display.textContent = display.textContent.slice(0,-1);
}

function addDecimal() {
    return;
}

function keyPress(e) {
    switch (e.key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            newNumber(e.key);
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            newOperator(e.key);
            break;
        case 'Enter':
            enter();
            break;
        case 'Backspace':
            back();
            break;
        case '.':
            addDecimal;
            break;
        case 'Escape':
            clear()
            break;
    }
}

isPriorityOperation = (str) => (str === '/' || str === '*');
// Returns true is it is a high priority calculation

isLowPriorityOperation = (str) => (str === '+' || str === '-');

function calculate(calculation) {
    if (calculation.some(str => (str === '') || str.search(/[a-zA-Z]/)!= -1 ) ) {
        return ['ERROR'];
    }
    while (calculation.some(isPriorityOperation)) {
        const index = calculation.findIndex(isPriorityOperation);
        let result;
        if (calculation[index] === '*') {
            result = calculation[index-1] * calculation[index+1];
        } else {
            if (parseInt(calculation[index+1],10) === 0) {
                return ['Forbidden !']
            }
            result = calculation[index-1] / calculation[index+1];
        }
        calculation.splice(index-1, 3, result.toString());
    }
    while (calculation.some(isLowPriorityOperation)) {
        const index = calculation.findIndex(isLowPriorityOperation);
        let result;
        if (calculation[index] === '+') {
            result = +calculation[index-1] + +calculation[index+1];
        } else {
            result = calculation[index-1] - calculation[index+1];
        }
        calculation.splice(index-1, 3, result.toString());
    }
    return calculation;
}



let calculation = [''];