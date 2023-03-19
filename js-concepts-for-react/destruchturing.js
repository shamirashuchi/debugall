//1.array destruchturing
const numbers = [43,65];
//first niyom
//const x = numbers[0];
//const y = numbers[1];
//second niyom
const [x,y] = [42,65];
function boxify(num1,num2){
    const nums = [num1,num2];
    return nums;
}

const [first,second] = boxify(99,34);
//console.log(boxify(99,34));
//console.log(x,y)

const student = {
    name: 'Sakib Khan',
    age:32,
    movies:['King khan','Dhakar Mastan']
}
const [firstmovie,secondmovie] = student.movies;


//object destructuring
//const {name,age} = {name: 'alu', age:14};
const {name,age} = {id:12, name: 'alu', slary:4000,age:14};


const employee = {
    ide : 'VS code',
    designation: 'developer',
    machine: 'mac',
    language:['html', 'css', 'js'],
    specification:{
        height:66,
        weight:67,
        address:'kumarkhali',
        drink:'water',
        watch: {
            color: 'black',
            price:500,
            brand:'garmin'
        }
    }
}

const {machine,ide} = employee;
const {weight,address} = employee.specification;
const [l,m,n] = employee.language;
//console.log(l,m,n);
const {color} = employee?.specification?.watch;
console.log(color);
