/**14. Crear un archivo llamado sistemaoperativo.js, que muestre las siguientes variables del sistema
 operativo:
 a. Información de los CPUs (cpus())
 b. Memoria total (totalmem())
 c. Memoria libre (freemem())
 d. Si es basado en x86 o x64 (arch())
 e. Ruta base (homedir())
 f. Nombre del host (hostname())
 g. Interfaces de red networkInterfaces())*/

const os = require('os')

console.log(
    'a. Información de los CPUs (cpus()):  '+ os.cpus().map(value => value.model).join('\n') + '\n' +
    'b. Memoria total (totalmem()):  '+ os.totalmem() + '\n' +
    'c. Memoria libre (freemem()):  '+ os.freemem() + '\n' +
    'd. Si es basado en x86 o x64 (arch()):  '+os.arch() + '\n' +
    'e. Ruta base (homedir()):  '+ os.homedir() + '\n' +
    'f. Nombre del host (hostname()):  '+os.hostname() + '\n' +
    'g. Interfaces de red networkInterfaces()):  '+os.networkInterfaces() + '\n'
)
