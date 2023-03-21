//arrays destructuring

let friuts = ['Banana','apple'];
let [a,b] = friuts;
//destructurar 

console.log(a,b);

//Object destructuring

let user =  {username:'Lenny', age : 35};

let {username, age} = user;

console.log(username,user);

//spread operador

let person = { name : 'Homer', age: 32};
let country = 'Macoa';

let data = {id: 1, ...person,country};
console.log(data);

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1 ,2 ,3);