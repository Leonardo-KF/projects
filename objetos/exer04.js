class pessoa {
  constructor(nome, sexo, idade) {
    this.nome = nome;
    this.sexo = sexo;
    this.idade = idade;
  }
}
class amigo extends pessoa {
  constructor(nome, sexo, idade, aniversario) {
    super(nome, sexo, idade);
    this.aniversario = aniversario;
  }
}
let pes1 = new pessoa("Pedro", "Masculino", 20);
let amg1 = new amigo("Lucas", "Masculino", 22, "03/09");
console.log("===================================");
console.log("As caracteristicas da pessoa são...");
console.log();
for (i in pes1) {
  console.log(`O(a) ${i}: ${pes1[i]}`);
}
console.log();
console.log("==================================");
console.log("As caracteristicas do amigo são...");
console.log();
for (i in amg1) {
  console.log(`O(a) ${i}: ${amg1[i]}`);
}
