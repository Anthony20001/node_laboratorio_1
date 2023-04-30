const suma = (numA, numB) => `${numA} + ${numB} = ${numA + numB}\n`;
const resta = (numA, numB) => `${numA} - ${numB} = ${numA - numB}\n`;
const multiplicacion = (numA, numB) => `${numA} * ${numB} = ${numA * numB}\n`;
const division = (numA, numB) => {
    if(numB !== 0) {
        return `${numA} / ${numB} = ${numA / numB}\n`;
    }

    return "No es posible dividir entre cero\n";
}

/*console.log(suma(2, 2))
console.log(resta(2, 2))
console.log(multiplicacion(2, 2))
console.log(division(2, 2))
console.log(division(2, 0))*/


module.exports = {
    suma,
    resta,
    multiplicacion,
    division
}