var Cliente = /** @class */ (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.getNome = function () {
        return this.nome;
    };
    Cliente.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Cliente.prototype.apresentar = function () {
        console.log("Ei, meu nome \u00E9 " + this.nome + " e tenho " + this.idade + " anos");
    };
    return Cliente;
}());
var cliente = new Cliente("Thiago", 232);
// joao.idade = 23;
// joao.nome = "joao";
console.log(cliente.getNome());
console.log(cliente.apresentar());
cliente.setNome("Pedro");
console.log(cliente);
