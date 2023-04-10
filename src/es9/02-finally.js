const anotherFuncion = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Hey!! funciona');
            }else{
                reject('Mocho');
            }
    })
} //este promise tiene dos valores  pasará o no.

anotherFuncion()
.then(response =>console.log(response))
.catch(error => console.error(error))
.finally(() => console.log("finally"));