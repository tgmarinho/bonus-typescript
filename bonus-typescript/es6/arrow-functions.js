const precos = ["10", "23", "19", "90"];

// const precosEmReais = precos.map(function(preco) {
//   return "R$ " + preco + ",00";
// });

const precosEmReais = precos
  .filter(preco => preco != "90")
  .map(preco => `R$ ${preco},00`);

console.log(precosEmReais);
