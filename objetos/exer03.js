// herança -> quando falamos de herança, temos a classe mãe e as classses filhas.
// Ao extender a classe mãe a classe filha herda (recebe) tudo que é da mãe.
// pensando em animais como em um petshop.
class Animal {
  constructor(nome, idade, preço) {
    this.nome = nome;
    this.idade = idade;
    this.preço = preço;
  }
  ChecarEstoque() {
    return 10;
  }
}

// a palavra reservada extends indica que a minha classe cachorro esta recebendo TUDO (atributos e metodos) da classe animal.
class Cachorro extends Animal {
  constructor(nome, idade, preço, raça, peso) {
    super(nome, idade, preço); // preciso OBRIGATORIAMENTE colocar o super para que o meu programa entenda que eu quero reutilizar os atributos da classe mãe.
    this.raça = raça;
    this.peso = peso;
  }
  // posso criar metodos unicos e exclusivos para classe filha
  latir() {
    console.log("Au!! Au!!");
  }

  // posso personalizar metodos vindos da classe mãe.
  ChecarEstoque() {
    console.log("Temos 20 cachorros em promoção, aproveite!!");
  }
}
let pb = new Cachorro("totó", 1, 1000);
console.log(pb);
