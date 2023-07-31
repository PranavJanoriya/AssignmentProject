function RandomElement(arr) {
    const [first, second, , , ,last] = arr;
    return [first, second, last];
}

const TryArray = [1, 2, 3, 4, 5, 6];

const Resulte = RandomElement(TryArray);

console.log(Resulte);