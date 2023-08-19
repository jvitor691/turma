import express from "express";

const cidadeRoute = express.Router()

cidadeRoute.get("/cidades", (req, res) => {
  res.send("Ola");
});


export default cidadeRoute;