const prompt = require('prompt-sync')();

let compras = [['coca-cola', 4.50], ['arroz', 3.00], ['yopro', 7.90], ['feijão', 3.25]];
let c = 0;
let totcomp = 0;
console.log('Mercadinho da Maldade!!!');
console.log('========================================================================');
while (true){
    while (c < compras.length) {
        console.log(`O item comprado será ${compras[c][0]} o valor é: R$${compras[c][1].toFixed(2)} `);
        var qtd1 = 0;
        while (true) { 
            qtd1 = parseInt(prompt('Digite o numero de unidades que deseja comprar: '));
            if (qtd1 % 1 == 0){
                break;
            } else {
                console.log('Por favor digite um numero inteiro válido!');
            }
        }
        compras[c].push(qtd1);
        console.log('========================================================================');
        console.log(`Adcionado ao carrinho o item ${compras[c][0]}! O valor refente a ${qtd1} unidade(s) comprada(s) é: R$${(compras[c][1] * compras[c][2]).toFixed(2)}`);
        totcomp += compras[c][1] * compras[c][2];
        console.log(`Até o momento o valor da sua compra é de: R$${totcomp.toFixed(2)}`);
        console.log('========================================================================');
        c++;
    }
    while (true) { 
        var user = String(prompt('Deseja comprar mais alguma coisa que não esta lista [S/N]? ')).toUpperCase();
        if (user[0] == 'S' || user[0] == 'N'){
            break;
        } else {
            console.log('Você digitou uma opção invalida! Por favor tente novamente!');
        }
    }
    if (user == 'S'){
        let produto = []
        produto.push(prompt('Digite o nome do produto: '));
        produto.push(parseFloat(prompt('Digite o valor do produto em R$: ')));
        compras.push(produto);
        console.log('========================================================================');
    } else {
        break;
    }
}
console.log(`O valor total da sua compra é de: R$${totcomp.toFixed(2)}`)