// var, let, const
// VAR
// function iniciarTime(iniciaJogo: Boolean) {
//   var nome = "Messi e Amigos";
//   if (iniciaJogo) {
//     var cidade = "Em Dourados";
//   }
//   console.log(`${nome} vão jogar em ${cidade}`);
// }
// iniciarTime(false);
// LET
// function iniciarTime(iniciaJogoEMDourados: Boolean) {
//   let nome = "Messi e Amigos";
//   let cidade = "em São Paulo";
//   if (iniciaJogoEMDourados) {
//     cidade = "Em Dourados";
//   }
//   console.log(`${nome} vão jogar em ${cidade}`);
// }
// iniciarTime(false);
// CONST
function iniciarTime(iniciaJogoEMDourados) {
    var nome = "Messi e Amigos";
    var cidade = "em São Paulo";
    if (iniciaJogoEMDourados) {
        cidade = "Em Dourados";
    }
    console.log(nome + " v\u00E3o jogar em " + cidade);
}
iniciarTime(false);
