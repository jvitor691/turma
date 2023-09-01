const uuid = require("uuid");

class Aluno {
  constructor(nome, turma, ativo = true) {
    this.id = uuid.v4();
    this.nome = nome;
    this.turma = turma ?? "";
    this.ativo = ativo;
  }
}

module.exports = Aluno;
