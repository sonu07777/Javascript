// let d = new set();
function setdifference(setA, setB) {
  console.log(!setB.has(2));
  return new Set([...setA].filter((el) => !setB.has(el)));
}
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([1, 3, 4]);
let a = setdifference(setA, setB);
console.log(a);
