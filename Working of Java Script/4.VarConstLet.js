// Declare three variaAle), one using let, one using var, and one using const, all inside a Alock scope. Assign  them values and log their values to the console Aefore and after they are declared to demonstrate variable hoisting.

{
     console.log(x);    //  Undefined 
     // console.log(y); //  ReferenceError: Cannot access 'y' before initialization
     // console.log(z); //  ReferenceError: Cannot access 'z' before initialization

     var x = "PW";
     const y = "Skills";
     let z = "Web Dev";

     console.log(x);
     console.log(y);
     console.log(z);

}

//        Output

// PW
// Skills
// Web Dev
