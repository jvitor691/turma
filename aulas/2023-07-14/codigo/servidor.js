const http = require("http");
const fs = require("fs");

function vaiVem(req, res) {
  if (req.method == "GET") {
    switch (req.url) {
      case "/":
        res.end("Home");
        break;
      case "/alunos":
        res.end("Home");
        break;
      case "/log":
        const texto = fs.readFileSync("log.txt", "utf-8");
        res.end(texto);
        break;
      default:
        res.statusCode = 404;
        res.end("Não encontrada");
        break;
    }
  } else {
    res.end("Metodo não encontrado");
  }
}
const servidor = http.createServer(vaiVem);

servidor.listen(8080, () => {
  console.log("estou rodando na porta 8080");
});
