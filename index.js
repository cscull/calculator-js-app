const calculator = document.querySelector(".calculator-container");
const buttons = calculator.querySelector(".buttons-container");
const display = calculator.querySelector(".display");

buttons.addEventListener("click", e => {
  if (e.target.matches("div")) {
    const button = e.target;
    const action = button.dataset.action;
    const buttonContent = button.textContent;
    const displayedNumber = display.textContent;

    if (!action) {
      if (displayedNumber === "0") {
        display.textContent = buttonContent;
      } else {
        display.textContent = displayedNumber + buttonContent;
      }
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key!");
      const previousKeyType = calculator.dataset.previousKeyType;

      if (!action) {
        if (displayedNumber === "0" || previousKeyType === "operator") {
          display.textContent = keyContent;
        } else {
          display.textContent = displayedNumber + keyContent;
        }
      }
    }

    if (action === "decimal") {
      console.log("decimal key!", display.textContent);
      display.textContent = displayedNumber + ".";
    }
    if (action === "clear") {
      console.log("clear key!");
      display.textContent = "0";
    }
    if (action === "equal") {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNumber;

      display.textContent = calculate(firstValue, operator, secondValue);
    }
  }
  const calculate = (n1, operator, n2) => {
    let result = "";

    if (operator === "add") {
      result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === "subtract") {
      result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === "multiply") {
      result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === "divide") {
      result = parseFloat(n1) / parseFloat(n2);
    }

    return result;
  };
});
