// function imprimirIdade(pessoa: { idade: number }) {
//   console.log(pessoa.idade);
// }

// let joaoMarcos = { nome: "Joao Marcos", idade: 24 };

// imprimirIdade(joaoMarcos);

interface Pessoa {
  idade: number;
  sexo?: string; // com ? não é obrigatório e o codigo compila
}

function imprimirIdade(pessoa: Pessoa) {
  console.log(pessoa.idade);
}

let joaoMarcos = { nome: "Joao Marcos", idade: 24 };

imprimirIdade(joaoMarcos);

function registrarBem(bem: { nome: string; valor: number }) {
  console.log(`${bem.nome} registrado, com valor de ${bem.valor}`);
}

let bem = {
  nome: "impressora",
  descricao: "impressora do setor alfa",
  valor: 200
};

registrarBem(bem);

interface Cidade {
  nome: string;
  populacao?: number;
}

function cadastrarCidade(cidade: Cidade) {
  console.log(`${cidade.nome} cadastrada e tem ${cidade.populacao} habitantes`);
}

let cidade = { nome: "Dourados", populacao: 230000 };

cadastrarCidade(cidade);
