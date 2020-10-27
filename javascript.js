const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', displayNumber));

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', setOperator));

const equal = document.querySelector('#equal');
equal.addEventListener('click', calc);

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearCalc);

let a = 0, b = '', o = 0, opUsed = false;

function clearCalc() {
    const p = document.querySelector('p');
    p.textContent = '';
    a = 0, b = '', o = 0, opUsed = false;
}

function calc() {
    let x;
    switch (o) {
        case 1: 
            x = operate('add', a, Number(b));
            displaySolution(x);
            return x;
            break;
        case 2: 
            x = operate('subtract', a, Number(b));
            displaySolution(x);
            return x;
            break;
        case 3: 
            x = operate('multiply', a, Number(b));
            displaySolution(x);
            return x;
            break;
        case 4:
            x = operate('divide', a, Number(b));
            displaySolution(x);
            return x;
            break;
    }
}

function displaySolution(n) {
    const p = document.querySelector('p');
    p.textContent = n;
}
function displayNumber() {
    const p = document.querySelector('p');
    const text = p.textContent;   
    const n = this.textContent;
    if (opUsed) b += n;
    p.textContent = text + n;    
}

function setOperator() {
    const op = this.textContent;
    const p = document.querySelector('p');
    if (opUsed) {
        let x = calc();
        a = x;
        b = 0;
    }
    const num = p.textContent;
    a = Number(num);
    opUsed = true;
    switch (op) {
        case '+':
            o = 1;
            p.textContent = num + ' + ';
            break;
        case '-':
            o = 2;
            p.textContent = num + ' - ';
            break;
        case '*':
            o = 3;
            p.textContent = num + ' * ';
            break;
        case '/':
            o = 4;
            p.textContent = num + ' / ';
            break;
    }     
}


function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(op, a, b) {
    switch (op){
        case 'add': 
           return add(a,b);
            break;
        case 'subtract':
           return subtract(a,b);
            break;
        case 'multiply':
           return multiply(a,b);
            break;
        case 'divide':
           return divide(a,b);
            break;
    }
}