const os = require("os")

function getHostname() {
    const hostname = os.hostname()

    return hostname
}

module.exports = getHostname;