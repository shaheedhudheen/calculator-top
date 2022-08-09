let add = (num1 = 0, num2 = 0) => num1 + num2;

let substract = (num1 = 0, num2 = 0) => num1 - num2;

let multiply = (num1 = 0, num2 = 0) => num1 * num2;

let divide = (num1 = 0, num2 = 1) => num1 / num2;

function operate() {
  let operator = prompt("enter your operator \n  +  -  X  / ");
  let num1 = Number(prompt("Enter numbers"));
  let num2 = Number(prompt());

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
  alert(result);
}

operate();


