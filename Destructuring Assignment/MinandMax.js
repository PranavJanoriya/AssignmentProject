function MaxMin(arr) {
     return {
          max : Math.max(...arr),
          min : Math.min(...arr)
     };
}

//        Put the Array 
const TryArray = [1, 2, 3, 4, 5, 6, 7, 20, 2];

//        Call the MaxMin Function 
const Resulte = MaxMin(TryArray);

console.log(Resulte);