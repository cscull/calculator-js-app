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
      if (displayedNumber == 0) {
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
      console.log("equal key!");
    }
  }
});
