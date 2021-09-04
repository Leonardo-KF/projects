const prompt = require("prompt-sync")();
console.log("-----< Cassino da Maldade >-----");
// classes -> "fabrica de objetos"
// atributos -> Caracteristicas dos objetos (marca, modelo, tamanho...)
// metodos -> "ações" (coisas que esse objeto xpto faz)

// Boa prática sempre colocar classes com letras maiusculas!
class Dado {
  // dentro do método construtor eu coloco os atributos do meu objeto
  constructor(faces) {
    this.faces = faces; // autoreferenciar os atributos
  }
  // função para numero aleatório
  GetRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  rolar() {
    // metodo do objeto
    console.log(
      "Resultado do dado: " + this.GetRandomIntInclusive(1, this.faces)
    );
  }
}
// instanciando (criando) os nossos dados
let d6 = new Dado(6); // criando um dado de 6 faces, somente apartir desse momento o dado existe.
let d12 = new Dado(12);
let d100 = new Dado(100);
d6.rolar();
d12.rolar();
d100.rolar();
