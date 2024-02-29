class Employe {
    constructor(name,salary,position){
      this.name=name;
    this.position=position;
    this.salary=salary;
    }
    getsalary(salary=80000){
        return this.salary =salary;
    }
}
const Employe1 = new Employe();
console.log(Employe1.getsalary());