//        Manipulation String

function manipulatestring(instring, callback){
     const manipulatedstring = instring.toUpperCase();

     callback(manipulatedstring);
}

function OutString(manipulatedstring) {
     console.log("The Manipting String :", manipulatedstring);
}

//        Callback and Try 

manipulatestring("hello world", OutString);
