// boolean
let estaPago: Boolean = true;

// number
let idade: Number = 20;
let valor: Number = 29.99;

// String
let empresa: String = "Microsoft";

// Template Strings

let nome: String = "João";
console.log(`Olá meu nome é ${nome} e tenho ${idade} anos`);

let concatenacaoTradicional =
  "Olá meu nome é " + nome + " e tenho " + idade + " anos.";
console.log(concatenacaoTradicional);

// arrays
let notas: Number[] = [9, 3, 1, 12];

// tuplas - tuple
let alunos: [string, number, boolean] = ["João", 22, true];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

// Enum
enum Cor {
  VERDE, // 0
  AMARELO, // 1
  AZUL, // 2
  BRANCO // 3
}

let corFundo: Cor = Cor.AZUL;
console.log(corFundo); // 2;
console.log(Cor[corFundo]); // AZUL

// Any

let algumValor: any = 4;
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
let valoresAleatorios: any[] = ["Joao", 23, true];
console.log(valoresAleatorios);

// void
// oposto de any, é usado para retorno de métodos, quando não retorna valor algum
function alerta(): void {
  // alert('Cadastrado com sucesso')
}

// null e undefined -> são tipos
let u: undefined = undefined;
let n: null = null;
// é possível mas não faz sentido...
// null é usado para limpar o valor de alguma variável
nome = null;
nome = "Pedro";
console.log(nome);
nome = n;
console.log(nome);
