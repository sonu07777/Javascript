let score = 5;
function one() {
  // let score =1;
  console.log(score);
}
function two() {
  let score = 2;
  console.log(score);
}
function three() {
  console.log(score);
}
one();
two();
three();
console.log(score);
function outerFunction() {
  let outerValue = "I am the outervalue present in the outerfunction ";
  function innerValue() {
    let inner = "I am the inner value ";
    console.log(outerValue);
  }
  // console.log(inner);  //Here it is not possible to acess the inner variable of the innerValue function
  innerValue();
}
outerFunction();

// Nesting of function
let globalValue = 1;

function func() {
  let val1 = 2;
  console.log(val1, globalValue);
  function innerFunction() {
    let val2 = 3;
    console.log(val1, globalValue, val2);
    function innerOfinnerFuntion(params) {
      let val3 = 4;
      console.log(val1, globalValue, val2, val3);
    }
    innerOfinnerFuntion();
  }
  innerFunction();
}
// func();
