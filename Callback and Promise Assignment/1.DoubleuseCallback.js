// Problem :- Write a function that takes in an array of integers and a callback function, and returns a new array where each element is doubled using the callback.

function doubleArray(arr, callback){
     const doubleArr = arr.map((num)=> {
          return callback(num);
     });
     return doubleArr;
}

const TryArray = [1, 2, 3, 2, 3];

function  callback(num) {
     return num * 2;
}

//   Call the Function
const doubleArray1 = doubleArray(TryArray, callback);

console.log(doubleArray1);


