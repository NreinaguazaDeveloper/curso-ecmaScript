class User{ // declarando

};

//const newUser = new User(); //instancia de un objeto.

class user{ //vamos a poner los metodos que va a tener
    //metodos
greeting(){
    return 'Hello';
}
};

const gndx = new user (); //Estamos generando la instancia de esta clase.

//usamos el metodo de lo que esta ahi
console.log(gndx.greeting());

const bebeloper = new user(); //nueva instancia de la misma clase
console.log(bebeloper.greeting());

//constructor
class user{
    //Constructor
    constructor(){
        console.log('nuevo usuario'); //cuando se cree una instacia de la clase va a iniciar los elementos del constructor
    }
    greeting(){
        return 'Hello';
    }
}

//Generamos una const para darle un valor asignado a la clase
const david = new user();


//this