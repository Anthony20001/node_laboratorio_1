/** 12. Crear un archivo llamado escribir.js, el cual debe escribir los números del 1 al 100 en un archivo
 llamado números.txt.*/

const fs = require('fs');

let numeros = []

for (let i = 1; i <= 100; i++) {
    numeros.push(i);
}

const numerosText = numeros.join('\n');

console.log(numeros);

fs.appendFile('archivo.txt', numerosText, function (err) {
    if (!err) {
        console.log("success");
    }
});