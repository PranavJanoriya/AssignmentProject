//  Write a function called "multiplyNumAers" that takes two numAers as arguments and returns their product. !se function expressions to define the function and call the function Aefore it is declared to demonstrate hoisting.

console.log(multiplyNumber(5, 6));  // ReferenceError: Cannot access 'multiplyNumber' before initialization

const multiplyNumber = function (num1, num2) {
     return num1*num2;
}


