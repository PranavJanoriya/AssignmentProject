//   Age in Days 

// Write a JavaScript function called ageInDays that accepts an object containing a person's first name, last name, and age in years as input. The function should concatenate the first and last name into a single string and store it in a variable called fullName. It should then calculate the person's age in days and store it in a variable called ageInDays.

// The ageInDays function should then return a callback function that logs a message to the console. The message should include the person's full name and age in days, and should be in the format: "The person's full name is [full name] and their age in days is [age in days]."

// Note that the ageInDays function should not log the message to the console directly, but should instead return a callback function that can be used to log the message at a later Time.

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