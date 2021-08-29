const prompt = require("prompt-sync")();
function formdata(datatxt) {
  while (true) {
    if (datatxt.length != 10) {
      console.log(
        "Você digitou a data em um formato invalido! Por favor digite novamente."
      );
      datatxt = String(prompt("Digite uma data no formato DD/MM/AAAA: "));
    } else {
      break;
    }
  }
  var mes = datatxt.slice(3, 5) - 1;
  var dia = datatxt.slice(0, 2);
  var ano = datatxt.slice(6);
  console.log(`O data digitada foi: ${dia} de ${meses[mes]} de ${ano}`);
}
const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
let data = String(prompt("Digite uma data no formato DD/MM/AAAA: "));
formdata(data);
