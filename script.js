let first;
let second;
let operator;

function operate(op, num1, num2){
    if(op === "+"){
        return add(num1, num2);
    } else if (op === "-"){
        return subtract(num1, num2);
    } else if (op === "*"){
        return multiply(num1, num2);
    } else{
        return divide(num1, num2);
    }
}
function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

