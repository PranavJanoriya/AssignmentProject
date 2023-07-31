
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
const doubleArray1 = doubleArray(TryArray, callback);

console.log(doubleArray1);


