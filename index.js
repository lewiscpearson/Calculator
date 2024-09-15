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
    if (n2 === 0) {
        alert("Cannot divide by zero")
        return "Error";
    }
    return n1 / n2;
}

//initialise calculator variables

//getting inputs from the buttons, and the display box

const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display")

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




//calculator logic

buttons.forEach(button => {
    const buttonClass = button.class;
    const buttonId = button.id;
    const buttonValue = button.value;
    const buttonText = button.textContent;

    console.log("num1:", num1, "num2:", num2);


    button.onclick = function() {
        if (buttonValue === "="){
            if ((num1 !== null) && (num2 !== null) && (operator !== null)) {

                operate(parseFloat(num1), parseFloat(num2), operator);
            } else {
                alert("Incomplete expression");
            }

        } else if (buttonId === "clear") {
            clearAll();
        } else if (buttonClass === "num"){
            if (operator === null) {
                console.log("num1:", num1, "num2:", num2);

                num1 = (num1 || "") + buttonValue;
                display.textContent = num1;
                
            } else {
                num2 = (num2 || "") + buttonValue;
                display.textContent = num2;
            }

        } else if (buttonId === "operator") {
            if (num1 !== null && num2 === null) {
                operator = buttonValue;
                display.textContent = "";
            } else {
                alert("Invalid operator placement");
            }
        }
        
    }
});

function clearAll(){
    display.textContent = "";
    num1 = null;
    num2 = null;
    operator = null;
}

