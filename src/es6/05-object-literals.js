//enahced object literals

function newuser(user, age, country, uId){
  return { 
    user,
    age,
    country,
    id: uId 
}
}   //return de un objeto de los valores que se han pasado.

console.log(newuser("carlosMakia","24","Buenos aires",1));