// function return through argument
const powTwo = (n) => {
  return 2 ** 2;
};
// console.log(powTwo(3));

function cubeTwo(powTwo, n) {
  return powTwo(n) * n;
}
let c = cubeTwo(powTwo, 5);
console.log(c);

//----------------------------------------------------

// function returning a function
function functionreturning() {
  return () => {
    console.log("Hello sonu !");
  };
}

let storedfun = functionreturning();
// console.log(storedfun());
// console.log(storedfun);
// storedfun()

// -----------------------------------------

// nested function or higher order fuction
function nested(n) {
  function one(p) {
    function two(q) {
      return n + p + q;
    }
    return two;
  }
  return one;
}

// console.log(nested(3)(3)(3))

// -----------------------------------------------

//  for array controling

const myarray = [2, 4, 5, 1];
const sumarray = (arr) => {
  let total = 0;
  arr.forEach(function (element) {
    total = total + element;
  });
  return total;
};
// console.log(sumarray(myarray));
// ----------------------------------------

//coustem output 
function intro(){
  return console.log("hellw everyone!");
}
// setInterval(intro,1000);
setTimeout(intro,2000)
