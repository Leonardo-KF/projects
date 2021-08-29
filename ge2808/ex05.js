const prompt = require("prompt-sync")();

function calcPassos(ini, fim, passo) {
  for (ini; ini <= fim; ini += passo) {
    npassos++;
  }
  console.log(`O numero de passos dados foi: ${npassos}`);
}
var npassos = 0;
while (true) {
  var pi = parseInt(prompt("Digite a posição de inicio em metros: "));
  if (pi % 1 == 0) {
    break;
  } else {
    console.log("Opção inválida! Por favor digite novamente.");
  }
}
while (true) {
  var pf = parseInt(prompt("Digite a posição de parada em metros: "));
  if (pf % 1 == 0) {
    break;
  } else {
    console.log("Opção inválida! Por favor digite novamente.");
  }
}
while (true) {
  var pa = parseInt(prompt("Digite o passo em metros: "));
  if (pa % 1 == 0) {
    break;
  } else {
    console.log("Opção inválida! Por favor digite novamente.");
  }
}
calcPassos(pi, pf, pa);
