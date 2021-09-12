const prompt = require("prompt-sync")();

async function somaPar(n1, n2, callbackSucess, callbackError) {
  let soma = n1 + n2;
  let sucess = true;
  if (soma % 2 == 0) {
    callbackSucess("Ok", soma, "PAR");
  } else {
    callbackError("Erro", soma, "IMPAR");
    sucess = false;
  }
  return new Promise((resolve, reject) => {
    if (sucess) {
      resolve(callbackSucess);
    } else {
      reject(callbackError);
    }
  });
}
async function init() {
  await somaPar(
    parseInt(prompt("Digite o primeiro numero: ")),
    parseInt(prompt("Digite o segundo numero: ")),
    function sucess(status, result, type) {
      console.log(`${status}, o resultado foi ${result} que é ${type}!`);
    },
    function error(status, result, type) {
      console.log(`${status}, o resultado foi ${result} que é ${type}!`);
    }
  )
    .then(function () {})
    .catch(function () {});
}
init();
