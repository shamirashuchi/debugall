const numbs = 5;
// numbs.push(45);
// D:\web development\milestone-7\js-error-debug-main\type-error.js:2
// numbs.push(45);
//       ^

// TypeError: numbs.push is not a function

// let address;
// console.log(address.home);
// D:\web development\milestone-7\js-error-debug-main\type-error.js:10
// console.log(address.home);
//                     ^

// TypeError: Cannot read properties of undefined (reading 'home')


// let address ={};
// console.log(address.home);
// undefined


let address ={ city: 'bBaria', postCode: 4560};
// console.log(address.home.building);
// D:\web development\milestone-7\js-error-debug-main\type-error.js:24
// console.log(address.home.building);
//                          ^

// TypeError: Cannot read properties of undefined (reading 'building')
//console.log(address?.home?.building);
// undefined

// const a = 'abul';
// a = 'babul';
// D:\web development\milestone-7\js-error-debug-main\type-error.js:34
// a = 'babul';
//   ^

// TypeError: Assignment to constant variable.