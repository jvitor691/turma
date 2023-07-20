const fs = require("fs");

// ler o arquivo package.json, tranforma em objeto e mostra os atributos dele 

const pacote = fs.readFileSync("package.json", "utf-8");

const pacoteObjeto = JSON.parse(pacote)

console.log(pacoteObjeto.name, pacoteObjeto.version);

// criar um arquivo novo 
const texto = `${pacoteObjeto.name}: ${pacoteObjeto.version}\n`

// fs.writeFileSync('log.txt', texto)

fs.appendFileSync('log.txt', texto)
