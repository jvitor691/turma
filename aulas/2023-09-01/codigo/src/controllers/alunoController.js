const alunoService = require("../services/alunoService");

const buscarAlunos = (req, res) => {
  const filtros = req.query;

  const alunos = alunoService.buscarAlunos(filtros);

  res.send(alunos);
};

const buscarPeloId = (req, res) => {
  const id = req.params.id;

  const aluno = alunoService.buscarPeloId(id);

  if (aluno) {
    res.send(aluno);
  } else {
    res.status(404).send({ message: "Usuário não encontrado!" });
  }

  res.send(aluno);
};

module.exports = { buscarAlunos, buscarPeloId };
