const express = require("express");
const fs = require("fs");
const Aluno = require("./Aluno");

const servidor = express();

servidor.use(express.json());

function buscaAlunos() {
  const texto = fs.readFileSync("alunos.json", "utf-8");
  const alunos = JSON.parse(texto);

  return alunos;
}

servidor.get("/alunos", (req, res) => {
  let alunos = buscaAlunos();
  const filtros = req.query;

  if (filtros.nome) {
    alunos = alunos.filter((aluno) =>
      aluno.nome.toUpperCase().includes(filtros.nome.toUpperCase())
    );
  }

  if (filtros.idade) {
    alunos = alunos.filter((aluno) => aluno.idade === filtros.idade);
  }

  res.send(alunos);
});

servidor.get("/alunos/:id", (req, res) => {
  const id = req.params.id;

  const alunos = buscaAlunos();

  const aluno = alunos.find((aluno) => aluno.id === id);

  if (aluno) {
    res.send(aluno);
  } else {
    res.status(404).send({ mesage: "Usuário não encontrado!" });
  }
});

servidor.delete("/alunos/:id", (req, res) => {
  const id = req.params.id;

  const alunos = buscaAlunos();

  const aluno = alunos[id];

  if (aluno) {
    alunos.splice(id, 1);
    fs.writeFileSync("alunos.json", JSON.stringify(alunos));

    res.send(aluno);
  } else {
    res.status(404).send({ mesage: "Aluno não encontrado!" });
  }
});

servidor.post("/alunos", (req, res) => {
  const aluno = req.body;

  const alunos = buscaAlunos();

  alunos.push(new Aluno(aluno.nome, aluno.turma, aluno.ativo));

  fs.writeFileSync("alunos.json", JSON.stringify(alunos));

  res.send({ message: "Criou" });
});

servidor.listen(8080, () => {
  console.log("estou rodando na porta 8080");
});
