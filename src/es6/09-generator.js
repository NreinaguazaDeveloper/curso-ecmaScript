//nos va a retornar una serie de valores segun el algoritmo
function* iterate(array){
    for (let value of array){//Por cada elemento del array vamos a hacer algo
        yield value;//yield va a retornar algo depende de lo que mandemos
    }

}

const it = iterate(['Anuel','Carl','JH','Dross','Carolina'])

console.log(it.next().value); //Esto solo nos muestra el primer valor.
console.log(it.next().value); //Esto solo nos muestra el primer valor.

console.log(it.next().value); //Esto solo nos muestra el primer valor.

console.log(it.next().value); //Esto solo nos muestra el primer valor.

console.log(it.next().value); //Esto solo nos muestra el primer valor.

console.log(it.next().value); //Esto solo nos muestra el primer valor.
