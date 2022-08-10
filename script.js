let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let result = "";

const numberButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".opr");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".cls");
const deleteButton = document.querySelector(".del");

const upperScreen = document.querySelector(".upperScreen");
const lowerScreen = document.querySelector(".lowerScreen");

lowerScreen.textContent = "";

function clearScreen() {
  lowerScreen.textContent = null;
}

function appendLowerScreen(value) {
  lowerScreen.textContent += value;
}

//selecting operator button
function selectCurrentOperator(value) {
  firstNumber = lowerScreen.textContent;
  currentOperator = value;
  clearScreen();
}

//numbers button event
numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendLowerScreen(button.value));
});

//operator selection event
operatorsButtons.forEach((operator) => {
  operator.addEventListener("click", () =>
    selectCurrentOperator(operator.value)
  );
});

//equal to button event
equalButton.addEventListener("click", (e) => {
  secondNumber = lowerScreen.textContent;
  clearScreen();
  operate(firstNumber, secondNumber, currentOperator);
});

clearButton.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  currentOperator = "";

  lowerScreen.textContent = "";
  upperScreen.textContent = "";
});

//operations function

let add = (num1 = 0, num2 = 0) => num1 + num2;

let substract = (num1 = 0, num2 = 0) => num1 - num2;

let multiply = (num1 = 0, num2 = 0) => num1 * num2;

let divide = (num1 = 0, num2 = 1) => num1 / num2;

function operate(firstNumber, secondNumber, currentOperator) {
  let operator = currentOperator;
  let num1 = Number(firstNumber);
  let num2 = Number(secondNumber);

  let result = 0;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = substract(num1, num2);
      break;
    case "*":
    case "x":
    case "X":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "enter a valid operator";
      break;
  }
  console.log(result);
  upperScreen.textContent = result;
}
