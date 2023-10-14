const express = require("express");
const cors = require("cors");
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

app.use(cors());

app.use(express.json());

app.get("/usuarios", async (req, res) => {
  const resultado = await pool.query("select * from usuario");

  res.send(resultado.rows);
});

app.post("/usuarios", async (req, res) => {
  try {
    const usuario = req.body;
    console.log(usuario);

    await pool.query(
      `insert into usuario values(default, '${usuario.nome}', '${usuario.email}', '${usuario.senha}','${usuario.username}')`
    );

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const usuario = req.body;
    console.log(usuario);

    const resultado = await pool.query(
      `select * from usuario where email = '${usuario.email}' and senha = '${usuario.senha}'`
    );

    console.log(resultado.rows);

    if (resultado.rows.length > 0) {
      res.sendStatus(200);
    } else {
      res.status(401).send({ error: "Usuário ou Senha Inválido!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

app.listen(8080);
