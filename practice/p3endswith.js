let v = [23, 4, 55, 64, 6, 34, 45];
console.log(v);
let x = v.toString();
console.log(x);
// If The Value is int and the you convert that value into string you can't use filter method in that .
// Here We taken the number value then we convert that value into string like "v" is the intger value which is covert in to string , after that it is not working .
let y = ["sony", " jy", "raja", "rajy"];
const w = y.filter((arr) => {
  return arr.endsWith("y");
});
console.log(w);
