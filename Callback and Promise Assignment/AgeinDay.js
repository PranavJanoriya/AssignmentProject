const person = {
     firstname : "Pranav",
     lastname : "Janoriya",
     age : 22,
};

function  ageCalcue(personObject, callback) {
     const fullname = `${personObject.firstname} ${personObject.lastname}`;
     const ageinday = personObject.age * 365;
     callback(fullname, ageinday);
}

function logResulte(fullname, ageinday) {
     console.log(`The Persone name ${fullname} and Its age in the No. of days : ${ageinday}`);
}

//        Callback to the ageCalcue() function 

ageCalcue(person, logResulte);