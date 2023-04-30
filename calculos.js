const bcrypt = require("bcryptjs")

const area = lado => lado * 2
const perimetro = lado => lado * 4

const generarHash = password => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

module.exports = {
    area,
    perimetro,
    generarHash
}