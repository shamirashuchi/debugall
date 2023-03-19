const calculateExpense = () => {
  const income = document.querySelector("#income").value;
//   Uncaught TypeError: Cannot read properties of null (reading 'value')
//     at calculateExpense (script.js:2:50)
//     at HTMLButtonElement.onclick (index.html:48:116)
// calculateExpense @ script.js:2
// onclick @ index.html:48
  const food = document.querySelector("#food").value;
  const rent = document.querySelector("#rent").value;
  //const clothes = document.querySelectorAll("#clothes").value;{nodelist ba array dey queryselectoall}
  const clothes = document.querySelectorAll("#clothes")[0].value;

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense =
    parseInt(food) + parseInt(rent) + parseInt(clothes);

  // calculate balance
  const balance = parseInt(income) - expense;
  //   validate income
  if (expense > income.value) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  // calculate saving amount
  const savePercentage = document.getElementById("save").value;
//   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
    return;
  }
  const income = document.querySelector("#income").value;
  const savingAmount = (savePercentage / 100)*income;

  // calculate remaining balance
  const balance = document.getElementById("balance").innerText;
  const remainingBalance = balance - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
    //remaining-balance
    // script.js:61 Uncaught TypeError: Cannot set properties of null (setting 'innerText')
    // at calculateSavings (script.js:61:60)
    // at HTMLButtonElement.onclick (index.html:64:101)
  }
};
