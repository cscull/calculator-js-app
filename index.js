const calculator = document.querySelector(".calculator-container");
const buttons = calculator.querySelector(".buttons-container");

buttons.addEventListener("click", e => {
  if (e.target.matches("div")) {
    const button = e.target;
    const action = button.dataset.action;

    if (!action) {
      console.log("number key!");
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator key!");
    }
  }
});
