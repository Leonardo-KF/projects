const prompt = require("prompt-sync")();
function invertArray(lst) {
  while (true) {
    // for que irá inverter a ordem do array
    let lstinvert = lst.pop();
    ilst1.push(lstinvert);
    if (lst.length == 0) {
      break;
    }
  }
}
let list1 = [];
let ilst1 = [];
while (true) {
  let useradd = prompt("Digite o item que deseja adicionar na lista: ");
  list1.push(useradd);
  while (true) {
    var contuser = String(
      prompt("Deseja continuar cadastrando [S/N]? ")
    ).toUpperCase();
    if (contuser[0] == "S" || contuser[0] == "N") {
      break;
    } else {
      console.log("Opção inválida! Por favor digite novamente.");
    }
  }
  if (contuser[0] == "N") {
    break;
  }
}
console.log(`A lista original é: ${list1}`);
invertArray(list1);
console.log(`A lista invertida é: ${ilst1}`);
