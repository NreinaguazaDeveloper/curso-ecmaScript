const array = [1,2,3,4 ,[1,3,4,6,87,[1,4,5,8,8]]];

console.log(array.flat(3)); //profundidad

//flat map es el primero que mapea cada uno de los elementos usados

const array2 = [1,2,3,4 ,[1,3,4,6,87,[1,4,5,8,8]]];
console.log(array2.flatMap(v => [v,v*2])) ;