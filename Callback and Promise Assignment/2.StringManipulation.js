//   String Manipulation

// Problem :- Write a function “manipulateString” that takes in a string and converts the characters to uppercase letters. The function should return a callback function “logString” that logs the sentence “The manipulated string is: “ along with the manipulated string or the new string to the console.

function manipulatestring(instring, callback){
     const manipulatedstring = instring.toUpperCase();
//   Callback the function
     callback(manipulatedstring);
}

function OutString(manipulatedstring) {
     console.log("The Manipting String :", manipulatedstring);
}

//        Call the Function  

manipulatestring("hello world", OutString);
