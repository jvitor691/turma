const os = require('os')

function getMemoLivre() {
    return os.freemem();
}

module.exports = getMemoLivre