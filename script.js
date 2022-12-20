const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equal]");
const allClearButton = document.querySelector("[data-all-clear]");
const clearButton = document.querySelector("[data-clear]");
const previousDisplay = document.querySelector("[data-previous]");
const currentDisplay = document.querySelector("[data-current]");
let values = [];
let currentValue;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (values.length == 2) {
      currentDisplay.textContent = "";
    }
    currentDisplay.textContent += button.textContent;
    currentValue = currentDisplay.textContent;

    if (values.length == 2) {
      values.push("placeholder");
    }
    console.log(currentValue);
    console.log(values);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    values = [];
    values.push(currentDisplay.textContent);
    values.push(button.textContent);
    previousDisplay.textContent = `${values[0]} ${values[1]}`;
    console.log(values);
    currentDisplay.textContent = "";
  });
});

equalsButton.addEventListener("click", () => {
  if (values.length == 3) {
    values.pop();
    values.push(currentDisplay.textContent);
    console.log(values);
    previousDisplay.textContent = `${values[0]} ${values[1]} ${values[2]}`;
    let intValues = [];
    for (let i = 0; i < values.length; i++) {
      if (i == 1) {
        intValues.push(values[i]);
      } else {
        intValues.push(parseInt(values[i]));
      }
    }

    console.log(intValues);
    let result = operate(intValues);
    currentDisplay.textContent = result;
    values = [];
  }
});

allClearButton.addEventListener("click", () => {
  currentValue = "";
  previousDisplay.textContent = "";
  currentDisplay.textContent = "";
  values = [];
});

clearButton.addEventListener("click", () => {
  let newString = currentValue.substr(0, currentValue.length - 1);
  currentValue = newString;
  currentDisplay.textContent = currentValue;
});

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const remainder = function (a, b) {
  return a % b;
};

function operate(arr) {
  if (arr[1] === "+") {
    return add(arr[0], arr[2]);
  } else if (arr[1] === "-") {
    return subtract(arr[0], arr[2]);
  } else if (arr[1] === "x") {
    return multiply(arr[0], arr[2]);
  } else if (arr[1] === "÷") {
    return divide(arr[0], arr[2]);
  } else if (arr[1] === "%") {
    return remainder(arr[0], arr[2]);
  }
}
