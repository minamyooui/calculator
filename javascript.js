const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener('click', displayNumber));

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', setOperator));

const equal = document.querySelector('#equal');
equal.addEventListener('click', calc);

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearCalc);

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', decimalInput);

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', delNum);

const p = document.querySelector('p');

let a = 0, aS = '', b = '', o = 0, opUsed = false, decUsed = false;

function delNum() {
    const text = p.textContent;
    if(opUsed) {
        b = b.slice(0,-1);
        p.textContent = aS + b;
    } else {
        p.textContent = text.slice(0, -1);    
    }
}

function decimalInput() {
    if(!decUsed){
        if(opUsed) {
            b += '.';
        }
        p.textContent += '.';
        decUsed = true;
    }
}

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
            x = Math.round(x*100)/100;
            displaySolution(x);
            return x;
            break;
        case 2: 
            x = operate('subtract', a, Number(b));
            x = Math.round(x*100)/100;
            displaySolution(x);
            return x;
            break;
        case 3: 
            x = operate('multiply', a, Number(b));
            x = Math.round(x*100)/100;
            displaySolution(x);
            return x;
            break;
        case 4:
            if (b == 0) {
                p.textContent = 'Infinity';
                break;
            }
            x = operate('divide', a, Number(b));
            x = Math.round(x*100)/100;
            displaySolution(x);
            return x;
            break;
    }
}

function displaySolution(n) {
    p.textContent = n;
}

function displayNumber() {
    const text = p.textContent;   
    const n = this.textContent;
    if (opUsed) b += n;
    p.textContent = text + n;    
}

function setOperator() {
    const op = this.textContent;
    if (opUsed) {
        let x = calc();
        a = x;
        b = '';
    }
    const num = p.textContent;
    a = Number(num);
    opUsed = true;
    decUsed = false;
    switch (op) {
        case '+':
            o = 1;
            aS = num + ' + ';
            p.textContent = aS;
            break;
        case '-':
            o = 2;
            aS = num + ' - ';
            p.textContent = aS;
            break;
        case '*':
            o = 3;
            aS = num + ' * ';
            p.textContent = aS;
            break;
        case '/':
            o = 4;
            aS = num + ' / ';
            p.textContent = aS;
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