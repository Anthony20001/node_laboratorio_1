/**16. Crear un archivo llamado cuadrado.js, el mismo debe importar un archivo llamado cálculos.js, en
 este último archivo existen 2 funciones que nos permiten calcular el área y perímetro de un
 cuadrado. Generar un hash con la respuesta de la suma del área y el perímetro. El hash debe ser
 calculado en una función del módulo cálculos.js*/

const utils = require("./calculos")

const area = utils.area(2)
const perimetro = utils.perimetro(2)
const password = area + perimetro

console.log("\n Hash: " + utils.generarHash(password.toString()) + "\n")

