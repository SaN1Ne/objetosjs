const motorista = {
    nome: "Matheus",
    idade: 25,
    carteira: "S"
}

if (motorista.idade >= 18 && motorista.carteira == "S") {
    console.log(`${motorista.nome} está apto a dirigir`)
} else {
    console.log(`${motorista.nome} não está apto a dirigir`)
}