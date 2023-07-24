const express = require("express");
const fs = require("fs");

const servidor = express();

servidor.use(express.json());

const alunos = [
  { nome: "João V" },
  { nome: "Victor" },
  { nome: "João VII" },
  { nome: "Enzo" },
  { nome: "Alzir" },
  { nome: "Roberto" },
  { nome: "Diego" },
];

function buscaAlunos() {
  const texto = fs.readFileSync("alunos.json", "utf-8");
  const alunos = JSON.parse(texto);

  return alunos;
}

servidor.get("/alunos", (req, res) => {
  res.send(buscaAlunos());
});

servidor.get("/alunos/:id", (req, res) => {
  const id = req.params.id;

  const alunos = buscaAlunos();

  const aluno = alunos[id];

  if (aluno) {
    res.send(aluno);
  } else {
    res.status(404).send({ mesage: "Usuário não encontrado!" });
  }
});

servidor.post("/alunos", (req, res) => {
  const aluno = req.body;

  const alunos = buscaAlunos()

  alunos.push(aluno)

  fs.writeFileSync('alunos.json', JSON.stringify(alunos))

  res.send({ message: "Criou" });
});

servidor.listen(8080, () => {
  console.log("estou rodando na porta 8080");
});
