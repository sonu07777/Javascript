function creatPromise(){
    return new Promise(function exec(resolcver,reject){
        setTimeout(() => {
            console.log("Time Done");
        }, 0);
    });
}

console.log("start");
let x = creatPromise();
console.log("In processing");
x.then(function f(){
    console.log("Promise done");
});
console.log("End");