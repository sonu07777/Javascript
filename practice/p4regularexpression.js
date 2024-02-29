let a = 'sonu'

let b = new RegExp();
let c = RegExp("sahoo");
// console.log(c);

let flag = 'gi';
//let d = new RegExp('sonu',flag); //or 
// let d = new RegExp(c,flag); or
// let d = new RegExp(a,flag);

let stTOcheck = "sonu is a good boy  and sonu is doing now full stack web devlopment course from the pw skill and sonu is a good boy sonu"

// const result = d.test(stTOcheck);
// console.log(result);

let anotherResult = stTOcheck.replace(/sonu/gi,'s-u');

console.log(anotherResult);

let url = "http//:choromextension%20.com "
let onemoreresult = url.replace(/%\d\d/,"_")
console.log(onemoreresult);