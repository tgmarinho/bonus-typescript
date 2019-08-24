// boolean
var estaPago = true;
// number
var idade = 20;
var valor = 29.99;
// String
var empresa = "Microsoft";
// Template Strings
var nome = "João";
console.log("Ol\u00E1 meu nome \u00E9 " + nome + " e tenho " + idade + " anos");
var concatenacaoTradicional = "Olá meu nome é " + nome + " e tenho " + idade + " anos.";
console.log(concatenacaoTradicional);
// arrays
var notas = [9, 3, 1, 12];
// tuplas - tuple
var alunos = ["João", 22, true];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
// Enum
var Cor;
(function (Cor) {
    Cor[Cor["VERDE"] = 0] = "VERDE";
    Cor[Cor["AMARELO"] = 1] = "AMARELO";
    Cor[Cor["AZUL"] = 2] = "AZUL";
    Cor[Cor["BRANCO"] = 3] = "BRANCO"; // 3
})(Cor || (Cor = {}));
var corFundo = Cor.AZUL;
console.log(corFundo); // 2;
console.log(Cor[corFundo]); // AZUL
// Any
var algumValor = 4;
algumValor = "Agora é String";
console.log(algumValor);
algumValor = true;
console.log(algumValor);
algumValor = 54;
console.log(algumValor);
algumValor = "qdiaboéisso";
console.log(algumValor);
// usar para bibliotecas de terceiros quando vc não sabe o tipo (nao foi feita em TS)
// Migração de Javascript para Typescript, para ir testando...
// Array com vários tipos de dados
var valoresAleatorios = ["Joao", 23, true];
console.log(valoresAleatorios);
// void
// oposto de any, é usado para retorno de métodos, quando não retorna valor algum
function alerta() {
    // alert('Cadastrado com sucesso')
}
// null e undefined -> são tipos
var u = undefined;
var n = null;
// é possível mas não faz sentido...
// null é usado para limpar o valor de alguma variável
nome = null;
nome = "Pedro";
console.log(nome);
nome = n;
console.log(nome);
