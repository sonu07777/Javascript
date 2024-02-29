let numbers =[1,2,3,4,5]

function Sumarray (arr){
    let total =0;
    arr.forEach(element => {
        total = total+element;
    });
    return total;
}
console.log(Sumarray(numbers));