let input = "Hello everyone my name is sonu sahoo";

let anotherinput = "";
for (let i = input.length - 1; i >= 0; i--) {
  anotherinput = anotherinput + input[i];
}

function reverse_string (){
    console.log(anotherinput)
}
setTimeout(reverse_string,2000)