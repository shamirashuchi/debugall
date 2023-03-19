const person =  {
    name:'lal nil holud mia',
    profession : 'Traffic Surgeon',
    age: 39,
    25 : 'summer',
    address: 'shahabag',
    'son-name': 'sunny'
};
//dot notation
//dot notation diye 25 hobe na
const prof1 = person.profession;

//bracket notation
const prof2 = person["profession"];
//console.log(prof2);

const pName = "profession";
const prof3 = person[pName];
//console.log(prof3);


const season = person[25];
//console.log(season);

const son = person['son-name'];
console.log(son);