const getMemoLivre = require("./monitor");
const getHostname = require("./ambiente");

console.log(getHostname())
console.log(getMemoLivre() / 1024 / 1024 / 1024)

