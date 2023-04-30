const bcrypt = require("bcryptjs")

const cifrar = (user, password) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    try {
        return {
            "estado": true,
            "usuario": user,
            salt,
            "hash_password": hash
        }
    } catch (e) {
        return {
            "estado": false
        }
    }
}

module.exports = {
    cifrar
}