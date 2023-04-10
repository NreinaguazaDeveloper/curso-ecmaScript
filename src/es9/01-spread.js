const user = { username:'ndn', age : 24, country: 'CO'}
const {username, ...values} = user;
//me va a mostrar el username pero lo demas me muestra los valores


console.log(username);
console.log(values);