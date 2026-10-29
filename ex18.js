const alunos = [
    {Aluno: "Pedro",nota: 8.4 },
    {Aluno: "Victor",nota: 9.5},
    {Aluno: "Eduardo", nota: 9},
    {Aluno: "Epaminondas", nota: 5}
]
let total = 0
let cont = 0
for(let i = 0; i < alunos.length; i++) {
    total += alunos[i].nota
    cont++
}

let media = total / cont

console.log(`Media das nota: ${media.toFixed(2)}`)