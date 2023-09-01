const express = require("express");
const routes = require("./routes/alunoRoute");

const servidor = express();

servidor.use(express.json());

servidor.use(routes);

servidor.listen(8080, () => {
  console.log("estou rodando na porta 8080");
});
