class User{}; //declaración de clase 

//const newUser = new User (); //Instacia de un objeto

class USER{
    //metodos
    greeting(){
        return 'bondia';
    }
};

const gndx = new USER();

console.log(gndx.greeting());
const bebeloper = new USER();
console.log(bebeloper.greeting());


//constructor
class USER {
    constructor(){
        console.log('nuevo user');
    }
    greeting(){
        return 'bondia';
    }
}

const david = new USER();

//this 

class USER{
    constructor(){
        this.name = none;
    }

    speak(){
        return 'Hello';
    }

    greeting(){
        return `${this.speak} ${this.name}`;
    }
}

const ana = new user ('Ana');
console.log(ana.greeting());


//Setters getters
class user{
    //CONSTRUCTOR
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
        //METODOS   
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak} ${this.name}`;

    }
    get uAge() {
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}


const bebeloper1 = new user ('David', 15);

console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);