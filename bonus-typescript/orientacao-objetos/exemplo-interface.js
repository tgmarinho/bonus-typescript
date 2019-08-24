// function imprimirIdade(pessoa: { idade: number }) {
//   console.log(pessoa.idade);
// }
function imprimirIdade(pessoa) {
    console.log(pessoa.idade);
}
var joaoMarcos = { nome: "Joao Marcos", idade: 24 };
imprimirIdade(joaoMarcos);
function registrarBem(bem) {
    console.log(bem.nome + " registrado, com valor de " + bem.valor);
}
var bem = {
    nome: "impressora",
    descricao: "impressora do setor alfa",
    valor: 200
};
registrarBem(bem);
function cadastrarCidade(cidade) {
    console.log(cidade.nome + " cadastrada e tem " + cidade.populacao + " habitantes");
}
var cidade = { nome: "Dourados", populacao: 230000 };
cadastrarCidade(cidade);
