const fnAsync =() => {
return new Promise((resolve, reject) =>{
    (true)
    ? setTimeout(() => resolve ('Async'),2000)
    :reject(new Error('Error!'));
}) 
} //va a retorar una nueva promesa y segun sea el caso se va a ejecutar cada una de ellas


const anotherFn = async () =>{
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
}
//va a recibir estos async y awade para ejecutar la promesa y ver el resultado

console.log('before');
anotherFn();
console.log('After');