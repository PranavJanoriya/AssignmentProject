//  Building Robust Functions in JavaScript

// Create a function called getPerson that takes an object as a parameter representing a person's name and age. The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>". However, if the parameter is not a valid object with the properties "name" and "age", the function should throw an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error message if it occurs.

function GetPerson(person) {
try{if(typeof person !== "Object" || !person.name || !person.age) {
     throw new Error("Invallied Perameter Type");
     } return `Name: ${person.name}, Age : ${person.age}`;
     } catch (error) {
     return error.message;
     }
} 

//   Call the Function
const Resulte1 = GetPerson({name: "Mithun", age : 20});

console.log(Resulte1); 

//    Output :- Name: Mithun ,Age: 20

const Resulte2 = GetPerson({name: "Mithun"});

console.log(Resulte2);

// Invalid Parameter Type

const Resulte3 = GetPerson(["name: Mithun"]);

console.log(Resulte3);

// Invalid Parameter Type


