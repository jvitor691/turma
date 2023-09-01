const alunoRepository = require("../repositories/alunoRepository");

function buscarAlunos(filtros) {
  let alunos = alunoRepository.pegarAlunos(filtros);
  return alunos;
}

function buscarPeloId(id) {
  let aluno = alunoRepository.buscarPeloId(id);
  return aluno;
}

module.exports = { buscarAlunos, buscarPeloId };
