//  Nested Objects.

// Write a function that takes an object representing a person as input, and extracts the name and street properties from a nested object using object destructuring. The function should return an object with these two properties. A sample object is given below.

const person = {
     Name : "Mithun",
     age : 21, 
     Address : {
          Street : "BB, Block B, Industrial Area",
          city : "Sector 62, Noida",
          State : "Uttar Pradesh"
     }
};

function extractData(obj) {
const {
     Name,
     Address : { Street }
} = obj;
return {Name, Street}
}

//        Call the Function

const Resulte = extractData(person);

console.log(Resulte);