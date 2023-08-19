import estadoService from "../services/estadoService.js";

function buscarEstados(req, res) {

  const estados = estadoService.buscarEstados()

  res.json(estados);
}

function cadastrarEstados(req, res) {

  
  res.send("eu sou um post");
}

function apagarEstados(req, res) {
  res.send("eu sou um post");
}

function buscarCidadesPorEstado(req, res) {
  res.send("eu sou um post");
}

const cidadesControllers = {
  buscarEstados,
  cadastrarEstados,
  apagarEstados,
  buscarCidadesPorEstado,
};

export default cidadesControllers;
