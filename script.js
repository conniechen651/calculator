let displayedString = "";
let first;
let second;
let operator;

let screen = document.querySelector("#screen");
let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operation");
let clear = document.querySelector(".clear");
let equals = document.querySelector(".equals");
let decimal = document.querySelector(".decimal");

display();

// functions --------------------------------------------
decimal.addEventListener("click", eventHandler);

function eventHandler(e) {
    displayedString += e.target.id;
    screen.textContent = displayedString;
    this.removeEventListener("click", eventHandler);
}

equals.addEventListener("click", () => {
    parse(displayedString);
    if(operator === "="){
        displayedString = first;
    } else {
        displayedString = operate(operator, parseInt(first), parseInt(second));
    }
    displayedString = displayedString.toString();
    if(displayedString.length > 12){
        displayedString = displayedString.slice(0, 12);
    }
    screen.textContent = displayedString;
    decimal.addEventListener("click", eventHandler);
});

clear.addEventListener("click", () => {
    displayedString = "";
    screen.textContent = displayedString;
    operator=null;
    first = null;
    second = null;
});

function parse(str){
    let index;
    if(str.includes("+")){
        operator = "+";
        index = str.indexOf("+");
    } else if (str.includes("-")){
        operator = "-";
        index = str.indexOf("-");
    } else if (str.includes("x")){
        operator = "x";
        index = str.indexOf("x");
    } else if (str.includes("÷")){
        operator = "÷";
        index = str.indexOf("÷");
    } else {
        operator = "=";
        first = str.slice(0, str.indexOf("="));
        return;
    }
    first = str.slice(0, index);
    second = str.slice(index+1, str.length-1);
}


function display(){
    numbers.forEach((number) => {
        number.addEventListener("click", (e) => {
            displayedString += e.target.id;
            screen.textContent = displayedString;
        });
    });
    operations.forEach((operation) => {
        operation.addEventListener("click", (e) =>{
            displayedString += e.target.id;
            screen.textContent = displayedString;
        });
    });
}

function operate(op, num1, num2){
    if(op === "+"){
        return add(num1, num2);
    } else if(op === "-"){
        return subtract(num1, num2);
    } else if(op === "x"){
        return multiply(num1, num2);
    } else if (op === "÷"){
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

