//'almas',5,true,{},[]
//'',0,false,nll.undefined
//check truthy
let myVar = 5;
if(myVar){
    myVar = myVar*100;
}
else{
    myVar = 0;
}

//check negative or falsy
let myMoney = 50;
if(!myMoney){

}

const money =800;
let food;
if(money > 100){
    food = 'biryani';
}
else{
    food = "cha biscuit";
}

//ternary
let food1 = money>100 ? 'biryani' : "cha biscuit";
//console.log(food1);

let drink = (money>100 && myVar > 100) ? "coke" : "filter water";
//console.log(drink);

//number to string conversion
const num1 = 52;
//console.log(num1);
const numstr = num1 + '';
//console.log(numstr);

//string to number conversion
const input = '560';
const inputNum = +input;
//console.log(inputNum);

let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
isActive ? showUser() : hideUser();
//use && if the left side is true then right side will be executed
isActive && showUser();
// use  || if the left side is false then right side will be executed
isActive || hideUser();
//toggle boolean
isActive = !isActive;