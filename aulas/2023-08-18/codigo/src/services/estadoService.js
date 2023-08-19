import estadoRepository from "../repositories/estadoRepository.js";

function buscarEstados() {
  
  const estados = estadoRepository.buscarEstados();

  return estados;
}

const estadoService = { buscarEstados };

export default estadoService;
