function getPerson(obj){
    try{
        if (typeof obj!=="object" || !obj.age || !obj.name) {
            throw new Error ("invalid parameter type");
        }
         return `Name:${obj.name},Age:${obj.age}`;    
    }
    catch (Error){
        return Error.message;
    }
}
  
  // Expected Output
  console.log(getPerson({ name: "Mithun", age: 20 })); // Name: Mithun, Age: 20
  console.log(getPerson({ name: "Mithun" })); // Invalid parameter type
  console.log(getPerson(["name", "Mithun"])); 
  console.log(getPerson({name:"sonu",age:34}));  
  