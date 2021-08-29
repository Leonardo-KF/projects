function calcarea(larg, compr) {
  console.log(`Calculo de area! largura ${larg} x ${compr} = ${larg * compr}`);
  console.log(`Então a áre é ${larg * compr}`);
}
while (true) {
  let largura = parseInt(prompt("Digite a largura do terreno: "));
  let comprimento = parseInt(prompt("Digite o comprimento do terreno: "));
  if (largura % 1 == 0 || comprimento % 1 == 0) {
    calcarea(largura, comprimento);
    break;
  } else {
    console.log("Você digitou uma opção invalida! Por favor digite novamente.");
  }
}
