const venda = { 
    janeiro: 1000,
    fevereiro: 1500,
    marco: 2000
}

let soma = 0

for(let chaves in venda) {
    soma += venda[chaves]
}

console.log(`total de venda: ${soma}`)