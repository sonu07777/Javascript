function test(value){
    try{
        if (isNaN(value)){
            console.log("Invalid Number");
        }
        return value;
    }catch (e){
       return e.message; 
    }
}
console.log(test("hellow"));
console.log(test("123"));
console.log(typeof(test("123")));