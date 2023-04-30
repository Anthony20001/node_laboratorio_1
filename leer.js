/**13. Crear un archivo llamado leer.js, que debe leer el archivo llamado
 *números.txt y mostrarlos en pantalla.*/

 const fs = require('fs');

fs.readFile("archivo.txt", "utf8", (err, data) => {
    console.log(err ? err : data)
});