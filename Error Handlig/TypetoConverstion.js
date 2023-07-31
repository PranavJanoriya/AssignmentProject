function ConvertToNumber(str) {
     try{
     const num = Number(str);
     if(Number.isNaN(num)) {
          throw new Error("Invalied Number");
     } return num;
      
     } catch (error) {
          return error.message;
     }
}

const Resulte1 = ConvertToNumber("1, 2, 3");

const Resulte2 = ConvertToNumber("The");

console.log(Resulte1);

console.log(Resulte2);