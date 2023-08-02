//  Employee Class Challenge.

// Create a class called Employee with three properties: name, position, and salary. The class should have a method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and call the getSalary method.

class Employe {
     constructor(name, position, salary){
          this.name = name;
          this.position = position;
          this.salary = salary;
     }

     getDesciption() {
          return this.salary;
     }
}
//   Put the value in Employ Class 

const Employe1 = new Employe("Prabir Kumar", "Software Eng.", 80000);

const resulte = Employe1.getDesciption();

console.log(resulte);