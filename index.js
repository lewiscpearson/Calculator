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

let num1 = null;
let num2 =null;
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

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach(button => {
    const buttonId = button.id;
    const buttonText = button.textContent;

    button.onclick = function() {
        if (buttonText === "="){
            operate(num1, num2, operator);
            clearAll();
        } else if (buttonText ==="CE") {
            clearAll();
        } else if (buttonId === "num"){
            if ((operator === null) && (num1 === null)) {
                num1 += "" + buttonText;
            } else if ((num1 !== null) && (operator !== null)) {
                num2 += "" + buttonText;
            }

        } else if (buttonId == "operator") {
            if (num1==null) {
                num1 = buttonText;
            } else if (num2==null) {
                num2 = buttonText;
            }
        }

        display.textContent += buttonText;
    }
});

function clearAll(){
    display.textContent = "";
    num1 = null;
    num2 = null;
    operator = null;
}

