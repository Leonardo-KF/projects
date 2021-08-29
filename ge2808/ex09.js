const prompt = require("prompt-sync")();
let notas = [];
while (true) {
  while (true) {
    var usernotas = parseFloat(
      prompt("Digite a nota que deseja adcionar ao calculo da média: ")
    );
    if (isNaN(usernotas)) {
      console.log("Por favor digite uma nota válida.");
    } else {
      break;
    }
  }
  notas.push(usernotas);
  while (true) {
    var continuar = String(
      prompt("Deseja cadastrar mais alguma nota [S/N]? ")
    ).toUpperCase();
    if (continuar[0] == "S" || continuar[0] == "N") {
      break;
    } else {
      console.log("Opção inválida! Por favor digite novamente.");
    }
  }
  if (continuar == "N") {
    break;
  }
}
let somanotas = 0;
for (v of notas) {
  somanotas += v;
}
console.log(`Foram cadastradas as notas: ${notas}`);
console.log(
  `A média das notas cadastradas é: ${somanotas / parseInt(notas.length)}`
);
