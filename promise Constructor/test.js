function creatPromise1 (){
    return new Promise(function exec(resolver,reject){
         setTimeout(() => {
             console.log("timer done by nested promise");
             resolver(10);
         }, 3000);
    })
 }

 let y = creatPromise1();



function creatPromise (){
   return new Promise(function exec(resolver,reject){
    y.then(function f(){
        console.log("this is the nested promise");
     })
        setTimeout(() => {
          
            console.log("timer done");
           
            resolver(10);
        }, 3000);
   })
}



console.log("start");
let x =creatPromise();
console.log("in processing");
x.then(function f(){
    console.log("promise done");
});
console.log("end");

// output will be 
/*start
in processing
end
timer done by nested promise
this is the nested promise
timer done
promise done*/