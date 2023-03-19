/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousBalanceTotal = getTextElementValueById("balance-total");
  //const previousWithdrawTotal = getTextElementValueById("withdraw-total ");
  const previousWithdrawTotalone = getTextElementValueById("withdraw-total");
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalone);
  if(newWithdrawAmount>previousBalanceTotal || isNaN(newWithdrawAmount) || newWithdrawAmount<0){
        alert("Not sufficient amount")
      }
  else{
  //console.log(typeof newWithdrawAmount);
  //console.log(typeof previousWithdrawTotal);
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  // setTextElementValueById(withdraw - total, newWithdrawTotal);
//   Uncaught ReferenceError: withdraw is not defined
//     <anonymous> http://127.0.0.1:5500/js/withdraw.js:17
//     EventListener.handleEvent* http://127.0.0.1:5500/js/withdraw.js:12
// withdraw.js:17:3
setTextElementValueById("withdraw-total", newWithdrawTotal)
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
  }
});
