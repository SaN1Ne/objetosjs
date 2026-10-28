const produto = {
    nome: "detergente",
    preco: 2.50,
    quant: 8
}

let total = produto.preco * produto.quant

console.log(`O ${produto.nome} tem em valor no estoque R$${total}`)