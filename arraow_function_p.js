// one or two parameter wala
// if you have single parameter you can also dont use the parenthesis but in double parametr you use the paraenthesis is mandetory
const arrow = (message) => "hay my name is sonu ";
console.log(arrow())

const arro_w = (x,y )=> x*y;
console.log(arro_w(10,10)) ;

// multiple statement in function expression 
const sum = (x,y)=>{
    console.log ('Adding ${x} and ${y}'); //doubt is $ or &
    return x+y;
};

sum(10,10);
const sum1=(p,q)=> ({sum_is:p+q,differeceis:p-q});
console.log (sum1(10,11))