function greet(name) {
     return new Promise((resolve) => {
          const Greeting = `Hello ${name}`
          resolve(Greeting);
     })
}

//           Call My Greet Function

greet("Pranav").then((Message) => console.log(Message));