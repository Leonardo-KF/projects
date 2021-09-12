const prompt = require("prompt-sync")();
async function doubleValue(x) {
  if (x % 1 == 0) {
    var ok = true;
  } else {
    var ok = false;
  }
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (ok) {
        resolve(x * 2);
      } else {
        reject();
      }
    }, 5000);
  });
}
async function start() {
  await doubleValue(parseInt(prompt("Digite o numero: ")))
    .then(function (result) {
      console.log(`O dobro de ${result / 2} é: ${result}`);
    })
    .catch(function () {
      console.log("Não foi possivel realizar a operação");
    });
}
start();
