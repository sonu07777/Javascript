// one parameter and also one return statement 
let square = (x) =>x+x;
console.log(square(3)); 
console.log(square(7));

// for multiple arguments or parameters 
let mul =(x,y)=>{
    console.log("Adding {x} and {y}");
    return x+y;
}
let sum=mul(4,5);
console.log(sum);


// return an object in this array function 
let sum_and_difference=(x,y)=>({sum:x+y,difference:x-y})
sum_and_difference(3,3)
console.log(sum_and_difference(3,3));


// practice
let multipication=(x,y)=>x*y

