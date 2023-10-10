const express = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5433,
  user: "postgres",
  password: "123",
  database: "linkey",
});

pool.connect();

const app = express();

app.use(express.json());

app.get("/usuarios", async (req, res) => {
  const resultado = await pool.query("select * from usuario");

  res.send(resultado.rows);
});

app.post("/usuarios", async (req, res) => {
  try {
    const usuario = req.body;
    console.log(usuario);

    const resultado = await pool.query(
      `insert into usuario values(default, '${usuario.nome}', '${usuario.email}', '${usuario.senha}','${usuario.username}')`
    );

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

app.listen(8080);
