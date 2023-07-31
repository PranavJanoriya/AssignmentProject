function uniqeitem(word) {
     return new Set(word);
}

//        Call to the uniqeitem Function

const TryArray = [1, 2, 3, 4, 3, 5, 5, 3, 2, 1]

const Resulte = uniqeitem(TryArray)

console.log(Resulte);
