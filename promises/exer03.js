const prompt = require("prompt-sync")();

function authAge(x) {
  return new Promise((resolve, reject) => {
    if (x >= 18) {
      resolve("Parabéns cara você ja é maior de idade");
    } else {
      reject("Você precisa comer ainda muito feijão com arroz!!");
    }
  });
}
authAge(parseInt(prompt("Digite sua idade: ")))
  .then(function (result) {
    console.log(result);
  })
  .catch(function (result) {
    console.log(result);
  });
