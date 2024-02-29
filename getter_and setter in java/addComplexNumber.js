class addingComplexNumber{
    #real;
    #img;
    constructor(r,i){
        this.#real=r;
        this.#img=i;
    }
    display(){
        console.log(this.#real, "+i",this.#img);
    }
    
    get realValue(){
       return this.#real;
        
    }
    get imag_value(){
       return this.#img;
    }
    additionOfComplexNumber(c){
        this.#real = this.#real+c.imag_value;
        this.#img=this.#img+c.realValue;
    }

}
const c1=new addingComplexNumber(4,5);
c1.display();
const c2 =new addingComplexNumber(4,5);
c1.additionOfComplexNumber(c2);
c1.display();