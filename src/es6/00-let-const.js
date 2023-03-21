var lastName = 'david'; // asignar variable
//reasignar 

lastName = 'Oscar'; 
console.log(lastName);

const fruits = () => {
    if(true){
        var fruits1 = 'apple'; //function scope
        let fruits2 = 'Banana'; // block scope
        const fruits3 = 'Lemon' // block scope
    }
    console.log(fruits1);
    console.loh(fruits2);
    console.loh(fruits3);

}
fruits();