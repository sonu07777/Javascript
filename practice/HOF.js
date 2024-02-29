function sayHellow (){
    return () =>{
        console.log("Hellowrld!");
    }
}

let v= sayHellow();
console.log(v);
sayHellow();
v();