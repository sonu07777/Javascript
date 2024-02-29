let a=[1,"b","c","d",7]
// adding and deleting element in an array 
console.log(a)
a.push(29)
console.log(a)
a.unshift("v")
console.log(a)
a.pop(29)
console.log(a)
a.shift("v")
console.log(a)

// adding two array 
let b=[1,2,3,4,5,6,7,8,9]
let c=[12,54,21,56,98]
console.log(b)
let b1=b.concat(c)
console.log(b1)
c=b.join(",")
console.log(c)
d=b.reverse()
console.log(d)
e=[1,2,3,4,5,6,7]
f=e.slice(2,6) //end is up to end-1 ,start is start +1
console.log(f)
var g=[10,12,35,25,45,65]
console.log(g)
//  At position 2, add 2 elements, remove 1: 
h=g.splice(2,1,10,20)   
console.log(g)
