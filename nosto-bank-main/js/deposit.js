// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  if(isNaN(newDepositAmount) || newDepositAmount<0)
  {
    alert('give valid amount');
  }
  else{
  /* 
    1. get previous deposit total by id

    */
  // const previousDepositTotal = getTextElementValueById("deposit-total");
  // console.log(typeof previousDepositTotal);string
  const previousDepositTotalone = getTextElementValueById("deposit-total");
  const previousDepositTotal =parseFloat(previousDepositTotalone);
  //console.log(typeof previousDepositTotal);
  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
  //NaN undefined 10 deposit.js:17:11
  //$0010 $00 10 deposit.js:17:11
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);
//setTextElementValueById
  // get previous balance by using the function
//   const previousBalanceTotal = getextElementValueById("balance-total");
//   Uncaught ReferenceError: getextElementValueById is not defined
//     <anonymous> http://127.0.0.1:5500/js/deposit.js:23
//     EventListener.handleEvent* http://127.0.0.1:5500/js/deposit.js:2
// deposit.js:23:32
const previousBalanceTotalone  = getTextElementValueById("balance-total");
const previousBalanceTotal = parseFloat(previousBalanceTotalone);
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
setTextElementValueById("balance-total", newBalanceTotal);
//);
//Uncaught SyntaxError: expected expression, got ')'deposit.js:25
  }
});