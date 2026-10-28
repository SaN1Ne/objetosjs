// Exercício 5 — Removendo propriedades
// Crie um objeto chamado `funcionario` com as propriedades:
// * nome;
// * cargo;
// * salario.
// Depois, remova a propriedade `salario` utilizando `delete`.
// Exiba o objeto antes e depois da remoção.

funcionario = {
    nome: "Ambrósio",
    cargo: "Professor",
    salario: "8000"
}

console.log(funcionario)

delete funcionario.salario

console.log(funcionario)