const path = require("path")

function getPath() {
    return path.join(__dirname, "win", "7z.exe")
}

exports.path7za = getPath()