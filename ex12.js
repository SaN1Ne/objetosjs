// Exercício 12 — Objeto conta bancária
// Crie um objeto chamado `conta` contendo:
// * titular;
// * saldo.
// Depois:
// 1. Adicione um valor ao saldo, simulando um depósito.
// 2. Subtraia um valor do saldo, simulando um saque.
// 3. Exiba o saldo final.
// Não utilize funções.

conta = {
    titular: "Eduardo",
    saldo: 1.50,

    depositar(dinheiro) {
        this.saldo = dinheiro
    },
    saque(dinheiro) {
        this.saldo -= dinheiro
    }

    
}

conta.depositar(1000)

console.log(conta.saldo)

conta.saque(140)

console.log(conta.saldo)


