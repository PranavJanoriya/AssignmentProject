// 9. Check the presence using closures

// Create a numberChecker function that takes an array of numbers as an argument and returns a function. The returned function should take another number as an argument and return true if the number is in the array, and false otherwise.

function numberChecker(numbers) {
     return function (num) {
          return numbers.includes(num);
     };
}

const arr = [1, 2, 3, 4];
const resulte = numberChecker(arr);

console.log(resulte(3));

// true

console.log(resulte(6));

// false