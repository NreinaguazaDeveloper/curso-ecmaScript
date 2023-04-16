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

class user{
    constructor(name){//constructor va a recibir el valor de name
    this.name=name;
    }

//metodos
 speak(){
    return 'Hello';
}
greeting(){
    return`${this.speak()} ${this.name}`; //aqui uno los dos nombres
}
}

const ana = new user('Ana');
console.log(ana.greeting());

//setters and getters

class user{
    //constructor
    constructor(name, age){ //va a tener dos valores.
        this.name = name;
        this.age = age;
    }
    //metodos

#speak(){ //este metodo es privado
    return 'Hello';
}
greeting(){ //saludar
    return `${this.speak()} ${this.name}`; //aqui uno los dos nombres
}
get #uAge(){//Quiero obtener un valor para leerlo dentro de esta clase
   return this.age; 
}
set #uAge (n){ //privado
    this.age = n;
}
}

const bebeloper2 = new user('David', 14); //aqui pasamis los valores de la función de arriba
console.log(bebeloper2.uAge);//solo vamos a mostrar el valor que esta contenido dentro de ese elemento
console.log(bebeloper2.uAge = 20);