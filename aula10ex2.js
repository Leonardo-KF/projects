const prompt = require("prompt-sync")();
function valdad(ind, val) {
  if (ind == "id" || ind == "preço") {
    while (true) {
      if (!isNaN(val)) {
        val = parseInt(val);
        return val;
      } else {
        console.log(
          "Você digitou uma opção invalida! Por favor digite um valor numérico."
        );
        val = prompt(`Digite o ${ind} do veiculo: `);
      }
    }
  } else if (ind == "modelo" || ind == "marca" || ind == "nome") {
    while (true) {
      if (!isNaN(val)) {
        console.log(
          "Você digitou uma opção invalida! Por favor digite novamente."
        );
        val = prompt(`Digite o ${ind} do veiculo: `);
      } else {
        return val;
      }
    }
  }
}

var carros = { id: [], modelo: [], marca: [], nome: [], preço: [] };

while (true) {
  for (let i in carros) {
    let user = valdad(i, prompt(`Digite o ${i} do veiculo: `));
    carros[i].push(user);
  }
  while (true) {
    let cont = String(
      prompt("Deseja cadastrar mais um veiculo [S/N]? ")
    ).toUpperCase();
    if (cont == "N" || cont == "S") {
      break;
    } else {
      console.log(
        "Você digitou uma opção invalida! Por favor tente novamente."
      );
    }
  }
  if (cont == "N") {
    break;
  }
}
