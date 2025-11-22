//calculator application

//History array to store calculation logs
let history = [];

//Functio to store calculation history
function addToHistory (operand1, operator, operand2, result) {
    const entry = {
        operand1,
        operator,
        operand2,
        result
    }
    history.push(entry);
}

//addition
function add (num1, num2) {
    const result = num1 + num2;
    addToHistory(num1, '+', num2, result);
    return result;
}

//subtraction
function subtract (num1, num2) {
    const result = num1 - num2;
    addToHistory(num1, '-', num2, result);
    return result;
}

//multiplication
function multiply (num1, num2) {
    const result = num1 * num2;
    addToHistory(num1, '*', num2, result);
    return result;
}

//division
function divide (num1, num2) {
    if (num2 === 0) {
        console.log("Error: Cannot divide by zero.");
        return null;
    }
    const result = num1 / num2;
    addToHistory(num1, '/', num2, result);
    return result;
}

//Display history
function displayHistory() {
    if (history.length === 0) {
        console.log("No calculations yet.");
        return;
    }
    console.log("Calculation History:");
    history.forEach((entry, index) => {
        console.log(`${index + 1}: ${entry.operand1} ${entry.operator} ${entry.operand2} = ${entry.result}`);
    });
}

//testing the program
console.log("Addition: ", add(5, 3)); //8
console.log("Subtraction: ", subtract(10, 4)); //6
console.log("Multiplication: ", multiply(7, 6)); //42
console.log("Division: ", divide(20, 5)); //4
console.log("Division by zero: ", divide(10, 0)); //Error

//Display calculation history
displayHistory();