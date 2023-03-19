// const addInput = document.getElementById(add-field);
// Uncaught ReferenceError: add is not defined
//     <anonymous> http://127.0.0.1:5500/shopping-list.js:1
// shopping-list.js:1:18


const addInput = document.getElementById('add-field');
const colorInput = document.getElementById("color-field");
const itemList = document.getElementById("item-list");

const listDiv = document.getElementById("list-div"); //for hiding/showing
// const toggle  document.getElementById("toggle-button");
// Uncaught SyntaxError: missing = in const declarationshopping-list.js:7:6
const toggle =  document.getElementById("toggle-button");

// add item
function addItem() {
  const lastPickedColor = colorInput.value;
  const li = document.createElement("li");
  li.innerHTML = addInput.value;
  li.style.color = lastPickedColor;
  changeColor();
  // colorChange();
//   Uncaught ReferenceError: colorChange is not defined
//     addItem http://127.0.0.1:5500/shopping-list.js:22
//     onclick http://127.0.0.1:5500/shopping-list.html:1
// shopping-list.js:22:3
itemList.appendChild(li);
//   itemList.appendChild("li");
//   shopping-list.js:28 Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
//     at addItem (shopping-list.js:28:12)
//     at HTMLButtonElement.onclick (shopping-list.html:44:14)
// addItem @ shopping-list.js:28
// onclick @ shopping-list.html:44

  addInput.value = "";
}

// remove item
function removeItem() {
  let li = document.querySelector("li:last-child");
  itemList.removeChild(li);
//   shopping-list.js:41 Uncaught ReferenceError: Cannot access 'li' before initialization
//     at removeItem (shopping-list.js:41:24)
//     at HTMLButtonElement.onclick (shopping-list.html:53:14)
// removeItem @ shopping-list.js:41
// onclick @ shopping-list.html:53
  //let li = document.querySelector("li:last-child");
}

// change color
function changeColor() {
  const List = document.querySelectorAll("li");
  const lastPickedColor = colorInput.value;
  // for (let i = 0; i < List.length() i++) {
  //   Uncaught SyntaxError: missing ; after for-loop condition shopping-list.js:33:36
  //console.log(List);
  for (let i = 0; i < List.length; i++) {
    // for (let i = 0; i < List.length(); i++) {
//       Uncaught TypeError: List.length is not a function
//     changeColor http://127.0.0.1:5500/shopping-list.js:45
//     addItem http://127.0.0.1:5500/shopping-list.js:22
//     onclick http://127.0.0.1:5500/shopping-list.html:1
// shopping-list.js:45:30
    List[i].style.color = lastPickedColor;
  }
}

// uppercase
itemList.addEventListener("mouseover", (event) => {
  if (event.target.tagName == "LI") {
    event.target.style.textTransform = "uppercase";
  }
});

// lowercase
itemList.addEventListener("mouseout", (event) => {
  if (event.target.tagName == "LI") {
    event.target.style.textTransform = "lowercase";
  }
// }));
// Uncaught SyntaxError: unexpected token: ')'shopping-list.js:52:2
});

// hide/show list
function toggleButton() {
  if (listDiv.style.display == "none") {
    listDiv.style.display = "block";
    toggle.textContent = "Hide list";
  } else {
    listDiv.style.display = "none";
    toggle.textContent = "Show list";
  }
//} silo na
}
  // Uncaught SyntaxError: missing } after function bodyshopping-list.js:66note: { opened at line 57, column 24shopping-list.js:57:24