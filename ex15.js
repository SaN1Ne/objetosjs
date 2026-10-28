// Array de objetos
// Crie um array chamado `produtos` contendo 3 objetos.
// Cada objeto deve representar um produto com:
// * nome;
// * preco.
// // Depois, exiba o nome de todos os produtos usando `console.log()`.
const produtos =[
    {
    nome: "faca",
    preco: 10.00
    },
    {
    nome: "garfo",
    preco: 8.00
    },
    {
    nome: "colher",
    preco: 5.00
    }
    


]
for(let i = 0; i < 3;i++){
    console.log(produtos[i].nome)
}