class Cliente {
  nome: String;
  idade: Number;

  constructor(nome: String, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  getNome(): String {
    return this.nome;
  }

  setNome(nome: String) {
    this.nome = nome;
  }

  apresentar(): void {
    console.log(`Ei, meu nome é ${this.nome} e tenho ${this.idade} anos`);
  }
}

let cliente: Cliente = new Cliente("Thiago", 232);
// joao.idade = 23;
// joao.nome = "joao";
console.log(cliente.getNome());
console.log(cliente.apresentar());
cliente.setNome("Pedro");
console.log(cliente);
