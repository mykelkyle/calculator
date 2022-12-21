// GLOBAL VALUES

let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

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

decimalBtn.addEventListener("click", () => {
  appendDecimal();
});

equalBtn.addEventListener("click", () => {
  evaluate();
});

allClearBtn.addEventListener("click", () => {
  clearAll();
});

clearBtn.addEventListener("click", () => {
  backSpace();
});

// DISPLAY FUNCTIONS

function appendDecimal() {
  if (shouldResetScreen) {
    eraseScreen();
  }
  if (
    currentDisplay.textContent === "ERROR" ||
    currentDisplay.textContent.includes(".")
  ) {
    return;
  }
  if (currentDisplay.textContent === "") {
    currentDisplay.textContent = "0";
  }
  currentDisplay.textContent += ".";
}

function appendNumber(button) {
  if (shouldResetScreen || currentDisplay.textContent === "0") {
    eraseScreen();
  }
  if (currentDisplay.textContent.length > 12) {
    return;
  }
  if (currentDisplay.textContent === "ERROR") {
    return;
  }
  currentDisplay.textContent += button;
}

function setOperation(operator) {
  if (currentOperation !== null) {
    evaluate();
  }
  if (currentDisplay.textContent === "ERROR") {
    return;
  }
  firstOperand = currentDisplay.textContent;
  currentOperation = operator;
  previousDisplay.textContent = `${firstOperand} ${currentOperation}`;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperation === null) {
    return;
  }

  if (currentOperation === "÷" && currentDisplay.textContent === "0") {
    return (currentDisplay.textContent = "ERROR");
  }
  if (currentDisplay.textContent === "ERROR") {
    return;
  }

  secondOperand = currentDisplay.textContent;
  previousDisplay.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
  let result = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
  if (result.toString().length > 12) {
    currentDisplay.textContent = "ERRROR";
  } else {
    currentDisplay.textContent = result;
  }
  if (currentDisplay.textContent === "NaN") {
    currentDisplay.textContent = "ERROR";
  }
  currentOperation = null;
}

function backSpace() {
  if (currentDisplay.textContent === "ERROR") {
    return;
  }
  currentDisplay.textContent = currentDisplay.textContent
    .toString()
    .slice(0, -1);
  if (currentDisplay.textContent.length < 1) {
    currentDisplay.textContent = "0";
  }
}

function clearAll() {
  currentDisplay.textContent = "0";
  previousDisplay.textContent = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

function eraseScreen() {
  currentDisplay.textContent = "";
  shouldResetScreen = false;
}

function roundResult(num) {
  return Math.round(num * 1000) / 1000;
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
    case "%":
      return remainder(a, b);
    default:
      return null;
  }
}
