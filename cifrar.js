/**15. Importar un nuevo módulo, para cifrado.
 a. Ejecutar “npm install bcryptjs”
 b. Crear un archivo cifrar.js que permitirá generar un hash
 c. Incluir el módulo bcryptjs
 d. Generar un salt utilizando la función genSalt
 e. Cifrar utilizando el método hash
 f. Generar un salt utilizando genSaltSync.
 g. Generar un hash utilizando hashSync.
 h. Comparar con la función compare o compareSync el hash generado en el punto g con el texto de
 la contraseña.*/


const bcrypt = require("bcryptjs");
const password = "Hola Mundo"

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => console.log("Cifrado asíncrono: " + (err ?? hash) + "\n"))
})

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);
console.log("\nCifrado síncrono: " + hash + "\n")

const correct_password = bcrypt.compareSync(password, hash)
console.log("La contraseña es correcta? " + correct_password + "\n")