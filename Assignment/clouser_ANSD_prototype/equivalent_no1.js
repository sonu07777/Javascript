
for (let index = 65; index < 91; index++) {
    // console.log(String.fromCharCode(index));
} 

function printTheString(){
    let element = 0;
    for (let index = 0; index < arguments.length; index++) {
        element = arguments[index];
        // console.log(element);
    }
    // console.log(element[0]);
}

printTheString("ABC")

function equvalentNum(){

    let element = 0;
    let eachValue = 0;
    let equ=0;
    for (let i=0;i<arguments.length ; i++){
        element = arguments[i];
        for(let j = 65; j <=91;j++){
            if (element[i] == String.fromCharCode(j)) {
                
            }
        }
    }
}
