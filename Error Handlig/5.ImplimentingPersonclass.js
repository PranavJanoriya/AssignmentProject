//  Implementing a Person Class with Default Values.

// Create a class called Person with two properties: name and age. The class should have a method called getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the constructor to set the values of name and age to "Unknown" and 0 if they are not provided.

class Person {
     constructor(name, age){
          this.name = name;
          this.age = age;
     }

     getDetail(){
          return `Its Person Name : ${this.name} and Age : ${this.age}`
     }
}


const Person1 = new Person("Pranav", 22);


const resulte = Person1.getDetail();

console.log(resulte);