// Calculation functions
function addition(n1, n2) {
    return n1 + n2;
}

function subtraction (n1, n2) {
    return n1 - n2;
};

function multiply (n1, n2) {
    return n1 * n2;
}

function divide (n1, n2) {
    return n1 / n2;
}

//initialise calculator variables

let num1 = null;
let num2 = null;
let operator = null;

//the actual calculate function

function operate(num1, num2, operator) {
    let result;
    switch(operator) {
        case "+":
            result = addition(num1, num2);
            break;
        case "-":
            result = subtraction(num1, num2);
            break;
        case "*":
            result =  multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            alert("error");
            result = "Error";
    } 
    display.textContent = result;
    num1 = result;
    num2 = null;
    operator = null;
}

//getting inputs from the buttons, and the display box

const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display")


//calculator logic

buttons.forEach(button => {
    const buttonId = button.id;
    const buttonText = button.textContent;

    button.onclick = function() {
        if (buttonText === "="){
            if ((num1 !== null) && (num2 !== null) && (operator !== null)) {

                operate(parseFloat(num1), parseFloat(num2), operator);
            } else {
                alert("Incomplete expression");
            }

        } else if (buttonText ==="CE") {
            clearAll();
        } else if (buttonId === "num"){
            if (operator === null) {
                num1 = (num1 || "") + buttonText;
                display.textContent = num1;
            } else {
                num2 = (num2 || "") + buttonText;
                display.textContent = num2;
            }

        } else if (buttonId === "operator") {
            operator = buttonText;
            display.textContent = "";
        } else {
            alert("invalid operator placement");
        }

        
    }
});

function clearAll(){
    display.textContent = "";
    num1 = null;
    num2 = null;
    operator = null;
}

