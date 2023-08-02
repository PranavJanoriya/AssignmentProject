// 3. Car Description Class.

// Create a class called Car with three properties: company, model, and year. The class should have a method called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an instance of the Car class and call the getDescription method.

class Car{
     constructor(company, model, year) {
          this.company = company;
          this.model = model;
          this.year = year;
     }

     getDescription() {
          return `This is a ${this.company}, ${this.model}, ${this.year}`
     }
}

//   Put the value in Car Class

const Mycar = new Car("Skoda", "Rapid", 2022);

//        Call the Car Class

const resulte = Mycar.getDescription();

console.log(resulte);