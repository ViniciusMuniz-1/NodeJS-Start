function soma (a,b){
    return a+b
}

function sub (a,b){
    return a-b
}

function mult (a,b){
    return a*b
}

function div (a,b){
    return a/b
}

var num1;
var num2;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question("Qual operação quer executar? ", answer => {

    if (answer == 1){
        readline.question("Digite o 1º valor ", resp => {
            num1 = resp;
            readline.close();
        });
        readline.question("Digite o 2º valor", answer => {
            num2 = answer;
            readline.close();
        });
        console.log(soma(num1,num2));
    }
    readline.close();
})
