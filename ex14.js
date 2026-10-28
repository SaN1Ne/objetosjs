//    Exibindo dados de um objeto aninhado
// Crie um objeto chamado `escola` contendo:
// * nome;
// * endereco.
// O endereço deve ser outro objeto contendo:
// * rua;
// * numero;
// * bairro.
// Depois, exiba uma frase no seguinte formato:
// ```text
// A escola Instituto Exemplo fica na Rua Central, 
// número 500, bairro Centro. 
const escola ={
    nome: "Visconde",
    
    endereco: {
        rua: "eptacio pessoa",
        numero: 200,
        bairro: "fragata"

    }
}

console.log(escola) 
console.log(escola.endereco)
console.log(`a escola ${escola.nome} fica na rua ${escola.endereco.rua}, ${escola.endereco.numero}, ${escola.endereco.bairro}`)