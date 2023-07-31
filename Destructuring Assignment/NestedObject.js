const person = {
     Name : "Pranav",
     age : 22, 
     Address : {
          Street : "Tikari, Betul",
          city : "Betul",
          State : "M. P."
     }
};

function extractData(obj) {
const {
     Name,
     Address : { Street }
} = obj;
return {Name, Street}
}

console.log(extractData(person));