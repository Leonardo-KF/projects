const prompt = require("prompt-sync")();
function calc(n1, n2) {
  console.log(`A soma é ${n1} + ${n2} = ${n1 + n2}`);
  console.log(`A subtração é ${n1} - ${n2} = ${n1 - n2}`);
  console.log(`A multiplicação é ${n1} x ${n2} = ${n1 * n2}`);
  console.log(`A divisão é ${n1} / ${n2} = ${n1 / n2}`);
}

let user = calc(
  parseInt(prompt("Digite o primeiro numero: ")),
  parseInt(prompt("Digite o segundo numero: "))
);
