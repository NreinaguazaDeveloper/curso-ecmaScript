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