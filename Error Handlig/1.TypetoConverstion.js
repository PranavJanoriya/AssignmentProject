// Type Conversion.

// Write a function called convertToNumber that takes a string as an argument and returns the equivalent number. If the string cannot be converted to a number, the function should return the string "Invalid number". Use error handling in javascript to achieve this output.

function ConvertToNumber(str) {
     try{
     const num = Number(str);
     if(Number.isNaN(num)) {
          throw new Error("Invalied Number");
     } return num;
      
     } catch (error) {
          return error.message;
     }
}
//        Call the Function
const Resulte1 = ConvertToNumber("123");

const Resulte2 = ConvertToNumber("abc");

console.log(Resulte1);

console.log(Resulte2);