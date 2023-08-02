//  Only unique items are allowed.

// You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that
// contains only the unique elements. 

function uniqeitem(word) {
     return new Set(word);
}

//        Call to the uniqeitem Function

const TryArray = [1, 2, 3, 4, 3, 5, 5, 3, 2, 1]

const Resulte = uniqeitem(TryArray)

console.log(Resulte);
