function newUser(name, age, country){
    var name = name || 'oscar';
    var age = age || 34;
    var country = country || 'Colombian';

   console.log(name, age, country); 
}

newUser();

//----------------

function newadmin(name = 'Manuel', age = 32, country = 'Mexico'){

    console.log( name, age,country);
}

newadmin();
newadmin('Carl',25,'NY');