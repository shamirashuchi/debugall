//how to declare a variable using let const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';


//6 basic condition <,>,===,!==,<=,>=
//multiple condition : &&, ||
if(fatherName === 'arnold' || season === 'rainy'){

}
else if(fatherName === 'Arnold'){

}
else{

}

//3.array declare
//index
//length,push
const numbers = [89,35,98,12];
numbers[0] = 56;

//4. for loop
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

//5.function
function multiply(num1,num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(35,78);

//6.object
//3 ways to access property by name
const student = {
    name: 'Sakib Khan',
    age:32,
    movies:['King khan','Dhakar Mastan']
}
const myvariable = 'age';
console.log(student.age);//direct by property
console.log(student['age']);//access via property name string
console.log(student[myvariable]);//access via property name in a variable