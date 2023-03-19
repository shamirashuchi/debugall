function isBigger(num){
    if(num > 5){
        return true;
    }
    else {
        return false
    };
}
// }
const result = isBigger(11);
//console.log(result);
//D:\web development\milestone-7\js-error-debug-main\syntax-error.js:9
//}
//^
//SyntaxError: Unexpected token '}'


//const sum = a, b => a+b;
const sum = (a, b) => a+b;
const res = sum(3, 5);
//D:\web development\milestone-7\js-error-debug-main\syntax-error.js:18
//const sum = a, b => a+b;
 //              ^

//SyntaxError: Missing initializer in const declaration 


const musk = {
    name: 'elon',
    //age: 53
    age: 53,
    job: 'tesla'
}

console.log(musk.age);
//D:\web development\milestone-7\js-error-debug-main\syntax-error.js:32
//    job: 'tesla'
//    ^^^

//const numbers = [12, 13, 21  3, 34, 4, 4, ]
//D:\web development\milestone-7\js-error-debug-main\syntax-error.js:40
//const numbers = [12, 13, 21  3, 34, 4, 4, ]
 //                            ^

//SyntaxError: Unexpected number
const numbers = [12, 13, 21,  3, 34, 4, 4, ]
//for(let i = 0; i< 10 i++){
    for(let i = 0; i< 10 ;i++){
    //D:\web development\milestone-7\js-error-debug-main\syntax-error.js:48
//for(let i = 0; i< 10 i++){
    //                 ^

//SyntaxError: Unexpected identifier
    //const n = numbers[i;
       // D:\web development\milestone-7\js-error-debug-main\syntax-error.js:54
    //const n = numbers[i;
                     //  ^

//SyntaxError: Unexpected token ';'
    const n = numbers[i];
}

console.log(numbers);
//console.log(numbers
    //D:\web development\milestone-7\js-error-debug-main\syntax-error.js:64
//console.log(numbers
           // ^^^^^^^

//SyntaxError: missing ) after argument list

// if (numbers.length > 5) && (numbers[0] === 5){
    
// } 
// D:\web development\milestone-7\js-error-debug-main\syntax-error.js:71
// if (numbers.length > 5) && (numbers[0] === 5){
//                         ^^

// SyntaxError: Unexpected token '&&'

if (numbers.length > 5 && numbers[0] === 5){
    
} 
