async function fetchData() {
     const response = await 
fetch("https://jsonplaceholder.typicode.com/todos/1");
const Data = await response.json();
console.log(Data);
}

fetchData();