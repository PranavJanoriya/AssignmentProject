// Password Checker.

// Create a class called User with properties username and password. Implement a getter method for password that returns the password with all characters replaced by asterisks. Implement a setter method for password that checks if the new password is at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, set the new password. If not, log an error message.


class User {
     constructor(username, passward) {
          this.username = username;
          this.passward = passward;
     }

     getpassward() {
         return this.passward.replace(/./g, "*") ;
     }

     setPassward(newPassward){
          let containsNumber = false;
          let containsUppercase = false;
          for(let i = 0; i < newPassward; i++) {
               const char = newPassward.charAt(i);
               if(!NaN(char)) {
                    containsNumber = true;
               } else if(char === char.toUppercase()) {
                    containsUppercase = true;
               }
          }
          if (newPassward.length >= 8 && containsNumber && containsUppercase) {
               this.passward = newPassward
          } else {
               console.log(
                    "Error: Passward must be at least 8 characters long and contain at least one number and one uppercase letter."
               );
          }
     }
}


const user = new User("Pranav", "Pranav123");
//        Call the User Function
const resulte1 = user.getpassward() ;

console.log(resulte1);
// *****************
const resulte2 = user.setPassward("mypassward");

console.log(resulte2);
// Error: Passward must be at least 8 characters long and contain at least one number and one uppercase letter.


const resulte3 = user.setPassward("Mypassward");

console.log(resulte3);
// Error: Passward must be at least 8 characters long and contain at least one number and one uppercase letter.

const resulte4 = user.setPassward("Mypassward123");

console.log(resulte4);
// ****************