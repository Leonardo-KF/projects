const prompt = require("prompt-sync")();

// 1 - ARQUITETURA =  450.00;
// 2 - CIENCIADACOMPUTACAO  = 650.00;
// 3 - ENGENHARIA = 850.00;
// 4 - BIOMEDICINA = 750.00;
class alunogra {
  constructor(matricula, nome, dataNasc, codCurso, percentCobr) {
    this.matricula = matricula;
    this.nome = nome;
    this.dataNasc = dataNasc;
    this.codCurso = codCurso;
    this.percentCobr = percentCobr;
  }
  valorCurso() {
    this.percentCobr /= 100;
    if (this.codCurso == 1) {
      console.log(
        `O valor do curso de Arquitetura ficará: R$${(
          450 * this.percentCobr
        ).toFixed(2)}`
      );
    } else if (this.codCurso == 2) {
      console.log(
        `O valor do curso de Ciência da Computação será: R$${(
          650 * this.percentCobr
        ).toFixed(2)}`
      );
    } else if (this.codCurso == 3) {
      console.log(
        `O valor do curso de Engenharia será: R$${(
          850 * this.percentCobr
        ).toFixed(2)}`
      );
    } else if (this.codCurso == 4) {
      console.log(
        `O valor do curso de BioMedicina será: R$${(
          750 * this.percentCobr
        ).toFixed(2)}`
      );
    }
  }
}
class alunopos extends alunogra {
  constructor(
    matricula,
    nome,
    dataNasc,
    codCurso,
    percentCobr,
    linhadePes,
    orientador,
    bolsaEst
  ) {
    super(matricula, nome, dataNasc, codCurso, percentCobr);
    this.linhadePes = linhadePes;
    this.orientador = orientador;
    this.bolsaEst = bolsaEst;
  }
}
let alunog1 = new alunogra(3214, "", "", 0, 100);
console.log(`O numero da sua matricula para graduação é: ${alunog1.matricula}`);
alunog1.nome = String(prompt("Digite o seu nome: "));
alunog1.dataNasc = String(
  prompt("Digite a sua data de nascimento no formato DD/MM/AAAA: ")
);
console.log("----< Opções de curso disponiveis >----");
console.log("[1] - Arquitetura");
console.log("[2] - Ciência da Computação");
console.log("[3] - Engenharia");
console.log("[3] - BioMedicina");
console.log("=======================================");
alunog1.codCurso = parseInt(prompt("Digite o código do curso escolhido: "));
let pd = String(
  prompt("Você possui algum desconto no valor do curso [S/N]? ")
).toUpperCase();
if (pd[0] == "S") {
  alunog1.percentCobr -= parseInt(
    prompt("Digite o valor percentual de desconto que você adquiriu: ")
  );
}
alunog1.valorCurso();
