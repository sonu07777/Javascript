function sum_of_parameters() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) 
    sum += arguments[i];
    return sum;
}
let result = sum_of_parameters([19,30]);
console.log(result);
