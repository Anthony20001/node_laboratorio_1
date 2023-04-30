/**
 * 1 Crear un archivo llamado holamundo.js, el mismo debe imprimir
  un Hola Mundo desde la consola de node.js.*/

//console.log("Hola Mundo")


/**
 * 2. Crear una variable llamada nombre y otra llamada edad, asignarles un valor.
 * 3. Sobre el mismo archivo, imprimir concatenando y utilizando la plantilla*/

/*const nombre ="Anthony Ledezma";
const edad = 22;

console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);*/


/** 4. En el mismo archivo, crear dos variables numéricas y asignarle un valor a cada uno,
 * Imprimir la suma de estas dos variables utilizando plantillas. */

const numA = 2;
const numB = 3;

//console.log(`${numA} + ${numB} = ${numA + numB}\n`);


/** 5. Sobre el mismo archivo, crear una condición para verificar cuál de los dos números
 * es el mayor. Usar plantillas para imprimirlos */

//console.log(`El número mayor es: ${numA > numB ? numA : numB}`);


/** 6. Sobre el mismo archivo, crear un arreglo con distintos 5 números. Imprimir su
 * contenido utilizandoun for. Luego agregar 100 números a ese arreglo utilizando push
 * en un ciclo for.*/

let numbers = [1, 2, 3, 4, 5];
//numbers.forEach(num => console.log(`${num}\n`));

for (let i = 6; i <= 100; i++) {
    numbers.push(i);
}


/** 7. Sobre el mismo archivo, ahora recorrer el nuevo arreglo usando forEach. */

//numbers.forEach(num => console.log(`${num}\n`));


/** 8. Sobre el mismo archivo, crear un objeto llamado persona, que contenga como atributos
 * “nombre”, “edad, “dirección” y asignarle datos a cada propiedad. Mostrar los datos en
 * consola. */

const persona = {
    nombre: "Anthony",
    edad: 22,
    direccion: "La Chorrera, Barrio Balboa. Santa Clara"
}

console.log(persona)

/** 9. Crear un archivo llamado funciones.js y crear 4 funciones que realicen cálculos de suma,
 * resta, multiplicación y división. En la división evaluar si el denominador no sea cero.
 * Probar las funciones directamente desde el módulo de funciones. */





