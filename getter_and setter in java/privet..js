class complexNumber{
    #rating;
    #Regd_No;
    get getimgValue(){
        // console.log(this.#Regd_No);
        // console.log(this.#rating);
        return this.#Regd_No;
       
    }
    set setImageValue(r){
        this.#Regd_No=r;
        this.#rating=r;
    }
    add(){
        console.log(this.getimgValue);
    }
}
const obj = new complexNumber();

obj.setImageValue=3; //Here you can't use "obj.setImageValue(2)" bcz this is not a function 
console.log(obj.getimgValue);
obj.add();

