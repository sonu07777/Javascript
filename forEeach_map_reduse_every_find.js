// ------------------------------------------ //foreach by arrow function
let one = [2, 3, 4];
one.forEach((element, index, arr) => {
  console.log(index, element, arr);
});
//foreach by normalfunction
one.forEach(function (element, index, arr) {
  console.log(index, element, arr);
});
// by using for each access the string
const h = ["sonu", "asit", "akash", "shiva"];

h.forEach((el) => {
  console.log(el[0]);
});
// ----------------------------------------// map keyword is also do as foreach
one.map((element, index, arr) => {
  console.log(index, element, arr);
});
// -----------------------------------------// fillter keyword
let two = ["sonu", "asit", "akash", "shiva"];
const twowitha = two.filter((name) => {
  return name.startsWith("a");
});

console.log(twowitha);
// ----------------------------------------// shopping cart
const shoppoingcart = [20, 30, 40];
const sumofcart = shoppoingcart.reduce(
  (pre, curr) =>
    // console.log("The sum of two numbers is ")
    pre + curr,
  0
);
sumofcart;
console.log(sumofcart);
// --------------------------------------------every keyword
let three = [100, 200, 300, 755, 590];
const gamescore = three.every((v) => typeof v === "number");

console.log(gamescore);

// --------------------------------------find keyword
const above200 = three.find((score) => score >= 200);
console.log(above200);
