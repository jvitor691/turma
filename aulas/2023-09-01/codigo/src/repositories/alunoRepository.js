const fs = require("fs");

function pegarAlunos(filtros) {
  const texto = fs.readFileSync("database/alunos.json", "utf-8");
  let alunos = JSON.parse(texto);

  if (filtros.nome) {
    alunos = alunos.filter((aluno) =>
      aluno.nome.toUpperCase().includes(filtros.nome.toUpperCase())
    );
  }

  if (filtros.idade) {
    alunos = alunos.filter((aluno) => aluno.idade === filtros.idade);
  }

  return alunos;
}


function buscarPeloId(id) {

  const texto = fs.readFileSync("database/alunos.json", "utf-8");
  let alunos = JSON.parse(texto);

  const aluno = alunos.find((aluno) => aluno.id === id);

  return aluno
}

module.exports = { pegarAlunos, buscarPeloId };
