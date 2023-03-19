console.log("Syncronous_1");
setTimeout(function timeout(){
    console.log("asyncronous_1");
},5000);
console.log("Syncronous_2");

setTimeout(function timeout(){
    console.log("asyncronous_2");
},10000);

console.log("Syncronous_3");