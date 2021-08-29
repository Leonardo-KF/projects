const prompt = require("prompt-sync")();
function div3(n1) {
  while (true) {
    if (n1 % 1 == 0) {
      if (Number.isInteger(n1 / 3)) {
        return true;
      } else {
        return false;
      }
    } else {
      console.log("Opção invalida! Por Favor digite um numero inteieo valido!");
      break;
    }
  }
}
let numero = div3(
  parseInt(
    prompt("Digite o numero que você deseja saber se é divisivel por 3: ")
  )
);
console.log(numero);
