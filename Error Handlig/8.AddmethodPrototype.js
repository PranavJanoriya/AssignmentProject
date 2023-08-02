//  Adding a Method to a Prototype.

// Create a prototype object called Student with a property name. Add a method called printDetails to the prototype that logs the string "Hello, my name is {name}" to the console. Instantiate a Student object with the name "Mithun" and call the printDetails method.

function Student(name) {
     this.name = name;
}

Student.prototype.getDetail = function() {
     console.log(`My name is ${this.name}`);
}

const Student1 = new Student("Pranav");

const resulte = Student1.getDetail();

console.log(resulte);