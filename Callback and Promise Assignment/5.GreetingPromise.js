//  Greeting Promise

// You need to write a function that takes a name as input and returns a promise that resolves with a greeting message. The function should greet the person using their name, with a message in the format "Hello, {name}!".

// For example, if the input to the function is "Mithun", the promise should resolve with the String Hello Mithun

function greet(name) {
     return new Promise((resolve) => {
          const Greeting = `Hello ${name}`
          resolve(Greeting);
     })
}

//           Call My Greet Function

greet("Mithun").then((Message) => console.log(Message));