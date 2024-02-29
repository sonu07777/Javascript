let Myset = new Set();
for (let index = 1; index < 6; index++) {
    Myset.add(index)
}
Myset.add("sonu sahoo")
Myset.add({c:1,d:2})

// console.log(Myset);

function ConvTOarray(element){
    let a = Array.from(element);
    return a;
    // console.log(a);

}
let b= ConvTOarray(Myset)
console.log( b);

function ConvTOarray1(...element1){
    
    let a1= element1.map(e=>e)
    return a1;

}
let b1= ConvTOarray1(Myset)
console.log(typeof b1);
console.log(b1);//When we use the rest expression it give the array of that converted set but with size 
console.log(...Myset);//It does't give the array it spread the value 
