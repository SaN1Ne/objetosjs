const alunos = [
  { nome: "Ambrosio", nota: 8.5 },
  { nome: "Pedro", nota: 5.0 },
  { nome: "Vitor", nota: 7.0 },
  { nome: "Enzo", nota: 6.5 },
  { nome: "Eduardo", nota: 9.2 }
];

for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].nota >= 7) {
    console.log(`Nome: ${alunos[i].nome} | Nota: ${alunos[i].nota}`);
  }
}
