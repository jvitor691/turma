import express from "express";
import estadoController from "../controllers/estadoController.js";

const estadoRoute = express.Router();

estadoRoute.get("/estados", estadoController.buscarEstados);

estadoRoute.post("/estados", estadoController.cadastrarEstados);

estadoRoute.get("/estados/{uf}/cidades", estadoController.buscarCidadesPorEstado);

export default estadoRoute;
