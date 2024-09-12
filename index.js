// Calculation functions
function addition(n1, n2) {
    return n1 + n2;
}

function subtraction (n1, n2) {
    return n1-n1;
};

function multiply (n1, n2) {
    return n1*n2;
}

function divide (n1, n2) {
    return n1/n2;
}

let num1;
let num2;
let operator;

function operate(num1, num2, operator) {
    switch(operator) {
        case "+":
            addition(num1, num2);
            break;
        case "-":
            subtraction(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            alert("error");
    } 
}