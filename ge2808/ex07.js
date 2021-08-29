const prompt = require("prompt-sync")();
console.log("---> Tabuada <---");
while (true) {
  var n1 = parseFloat(prompt("Digite o numero que deseja saber a tabuada: "));
  if (n1 % 1 == 0) {
    break;
  } else {
    console.log(
      "Opção invalida! Por favor digite novamente um numero inteiro."
    );
  }
}

for (let i = 0; i < 11; i++) {
  console.log(`${i} X ${n1} = ${i * n1}`);
}
