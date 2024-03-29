class Funcionario {
  nome: String;
  salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  pagarImposto(taxa: number = 7.5) {
    console.log(`Pagando ${(this.salario * taxa) / 100} de imposto`);
  }
}

class Secreatario extends Funcionario {}

class Executivo extends Funcionario {
  pagarImposto(taxa: number = 27.5) {
    console.log("Executivo paga mais!");
    super.pagarImposto(taxa);
  }
}

let sarah = new Secreatario("Sarah", 20000);
sarah.pagarImposto();

let jorge = new Executivo("Jorge", 30000);
jorge.pagarImposto();
