const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Ingrese las notas separadas por espacios: ", function(datos) {

    let notas = datos.split(" ");
    let suma = 0;

    for (let i = 0; i < notas.length; i++) {
        suma = suma + Number(notas[i]);
    }

    let promedio = suma / notas.length;

    console.log("El promedio es: " + promedio.toFixed(2));

    if (promedio >= 3.0) {
        console.log("Aprobado: el promedio es igual o superior a 3.0");
    } else {
        console.log("No aprobado: el promedio es inferior a 3.0");
    }

    entrada.close();
});
