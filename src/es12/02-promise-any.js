//Con esto vamos a tener el punto de si todo ha sido resuleto..

//promesas
const promise1 = new Promise((resolve,reject)=> reject("Reject"));
const promise2 = new Promise((resolve,reject)=> resolve("resolve"));
const promise3 = new Promise((resolve,reject)=> resolve("Resolve 2"));


//nos devuelve la primera que cumpla.
Promise.any([promise1,promise2,promise3])
.then(response => console.log(response));