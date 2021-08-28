const prompt = require('prompt-sync')();
function lowVal(n1, n2){
    let menor = 0
    if (n1 < n2){
        menor = n1
    } else if (n2 < n1) {
        menor = n2
    } else {
        console.log('Os numeros são iguais!')
    }
    console.log(`O menor valor digitado foi${menor}`);
}
lowVal(prompt('Digite o primero numero: '), prompt('Digite o segundo numero: '))