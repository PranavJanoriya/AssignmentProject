function GetPerson(person) {
     if(typeof person !== "Object" || !person.name || !person.age) {
          throw new Error("Invallied Perameter Type");
     } catch (error) {
          return error.message;
     }
}