let myset = new Set()
 
myset.add(1)
myset.add(2)
myset.add({a:1,b:2})
myset.add("sonu sahoo")

// console.log(myset)
// console.log(myset.has("sonu sahoo"));
for (const index of myset) {  //if you put keys and value and entries it doesn't change the value it give same value in each method
    // console.log(typeof index);
    // console.log(index.keys);
}
