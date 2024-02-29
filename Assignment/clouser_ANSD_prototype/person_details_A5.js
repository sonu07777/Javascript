class person{
    constructor(name ="unknown",age = 0){
    this.name=name;
    this.age=age;
    }
    getDetails(){
        return `Name:${this.name},Age:${this.age}`
    }
    
}
const person1 = new person("sonu", 34);
const person2 = new person();
console.log(person2.getDetails());