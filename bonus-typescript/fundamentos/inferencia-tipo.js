// inferencia de tipos -> é a variável recebendo um tipo pelo valor q recebeu na inicialização da variável
var quantidade = 23;
// quantidade = "qualquercoisa"; // alerta do vscode afirmando q não compila pois inferiu q quantidade é um number
var x = [1, 2, null];
// x[0] = true; // true não é associável ao tipo number - não compila
// Contextual Typing
// consegue deduzir as propriedades do evento
window.onmousedown = function (evento) {
    console.log(evento.button); // OK;
    // console.log(evento.buton); // Não compila
};
