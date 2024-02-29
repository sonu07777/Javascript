class car{
    company;
    model;
    year;
    getDescription(){
        this.company = "skoda";
        this.model = "Rapid"
        this.year = 2022;
        return `This is a ${this.year} ${this.company} ${this.model} `
    }
}


// anothertype of up -
class car1{
    constructor (company,model,year){
        this.company = company;
        this.model = model;
        this.year= year;
    }
    getDescription1(){
        return `This is a ${this.year} ${this.company} ${this.model} `
    }

}
const myCar1 = new car1("skoda" , "Rapid" ,2022);
console.log(myCar1.getDescription1());

const myCar = new car();
console.log(myCar.getDescription());