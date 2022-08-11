let currentOperand = "";
let previousOperand = "";
let operator = null;
let result = "";
let haveDot = false;
const numberButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".opr");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".cls");
const deleteButton = document.querySelector(".del");

const operationsScreen = document.querySelector(".operationsScreen");
const resultScreen = document.querySelector(".resultScreen");



//clear
function clear() {
  currentOperand = "";
  previousOperand = "";
  operator = undefined;
  haveDot = false;
}

//delete
function deleteNum() {
  currentOperand = currentOperand.toString().slice(0, -1);
}
//append number
function appendNumber(number) {
  if (number === "." && !haveDot) {
    haveDot = true;
  } else if (number === "." && haveDot) {
    return;
  }
  currentOperand += number;
}

//choose operation
function chooseOperator(value) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    operate();
  }
  operator = value;
  previousOperand = currentOperand;
  currentOperand = "";
}

//compute

function operate() {
  let num1 = Number(currentOperand);
  let num2 = Number(previousOperand);

  if (isNaN(currentOperand) || isNaN(previousOperand)) return;
  console.log(num1);
  console.log(num2);

  let result = 0;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
    case "x":
    case "X":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return;
  }
  console.log(result);
  currentOperand = result;
  operator = undefined;
  previousOperand = "";
}

//update Display
function updateDisplay() {
  resultScreen.textContent = currentOperand.toString();
    if(operator != null){ 
        operationsScreen.textContent = `${previousOperand}${operator}`
    } else{
        operationsScreen.textContent = ''
    }
}

//numbers button event
numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    appendNumber(btn.value);
    updateDisplay();
  });
});

//operator button event
operatorsButtons.forEach((operator) => {
  operator.addEventListener("click", () => {
    chooseOperator(operator.value);
    updateDisplay();
  });
});

//equal to button event
equalButton.addEventListener("click", (e) => {
  operate();
  updateDisplay();
});

//clear button event
clearButton.addEventListener("click", () => {
  clear();
  updateDisplay();
});

//delete buttton event
deleteButton.addEventListener('click', ()=>{
    deleteNum();
    updateDisplay();
})


