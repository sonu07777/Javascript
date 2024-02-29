class Student{
    constructor(a){
        this.a =a;
    };
}
const student = new Student("sonu");
Object.prototype.PrintDetails = function(a){
    console.log(`Hellow , The stuednt is ${this.a}`);
}
student.PrintDetails();