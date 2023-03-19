function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
 const matches = inputFieldValueString.match(/\d+/);
  if(matches===null || matches[0].length !== inputFieldValueString.length){
    alert("Not valid number");
    return;
  }

  
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

  //inputField.value = "";
  //unreachable code after return statementutilities.js:6:2

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
//   Uncaught TypeError: textElement is null
//     getTextElementValueById http://127.0.0.1:5500/js/utilities.js:13
//     <anonymous> http://127.0.0.1:5500/js/withdraw.js:14
//     EventListener.handleEvent* http://127.0.0.1:5500/js/withdraw.js:12
// utilities.js:13:34
  const textElementValue = textElementValueString;
  //textElementValue;
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
  //textElement.value = newValue;
  //console.log(textElement.value);
  //console.log(typeof textElement.value);
}
