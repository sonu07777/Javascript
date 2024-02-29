function NumberChecker(num) {
  return function checkNums(check) {
    let temp = 0;
    let temp1 = check;
    for (let i = 0; i < num.length; i++) {
      if (num[i] == check) {
        temp = num[i];
        i == num.length;
      }
    }
    if (temp == 0) {
      return false;
    } else {
      return true;
    }
  };
}

const arr = [1, 2, 10, 4, 45];
const checkNums = NumberChecker(arr);  
console.log(checkNums(1));

//Another type of method , the method is includes 


// ----------------------------------------------------STARTS


function NumberChecker1(arr1){
    return function checkNums1(num1){
        return arr1.includes(num1);
    }
}

const arr1 = [1, 2, 10, 4, 45];
const checkNums1 = NumberChecker1(arr);
console.log(checkNums1(25));

