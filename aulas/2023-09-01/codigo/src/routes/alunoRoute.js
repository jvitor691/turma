const express = require("express");
const { buscarAlunos, buscarPeloId } = require("../controllers/alunoController");

const routes = express.Router();


routes.get("/alunos", buscarAlunos);

routes.get("/alunos/:id", buscarPeloId);

module.exports = routes;
