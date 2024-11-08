let currentInput = "";
let operator = "";
let previousInput = "";

function appendNumber(number) {
    currentInput += number.toString();
    document.getElementById("display").value = currentInput;
}

function setOperator(op) {
    if (currentInput === "") return; // Prevent setting operator without a number
    if (previousInput !== "") {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculateResult() {
    if (previousInput === "" || currentInput === "") return; // Prevent calculation if no input
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                alert("Cannot divide by zero");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = "";
    previousInput = "";
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    document.getElementById("display").value = "";
}
