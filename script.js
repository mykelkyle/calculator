// SELECTORS

const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const decimalBtn = document.querySelector("[data-point]");
const equalBtn = document.querySelector("[data-equal]");
const allClearBtn = document.querySelector("[data-all-clear");
const clearBtn = document.querySelector("[data-clear]");
const previousDisplay = document.querySelector("[data-previous]");
const currentDisplay = document.querySelector("[data-current]");

// EVENT LISTENERS

numberBtns.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    setOperation(button.textContent);
  });
});

allClearBtn.addEventListener("click", resetScreen());

clearBtn.addEventListener("click", backSpace());

equalBtn.addEventListener("click", evaluate());

// DISPLAY FUNCTIONS

function backSpace() {
  currentDisplay.textContent = currentDisplay.textContent
    .toString()
    .slice(0, -1);
}

function resetScreen() {
  currentDisplay.textContent = "";
}

function setOperation() {}

function appendNumber(number) {
  currentDisplay.textContent += number;
}

// MATH FUNCTIONS & OPERATION

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function remainder(a, b) {
  return a % b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "÷":
      if (b === 0) {
        return null;
      } else return divide(a, b);
  }
}
