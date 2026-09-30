const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Ingrese los números separados por espacios: ", function(datos) {

    let numeros = datos.split(" ");
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma = suma + Number(numeros[i]);
    }

    console.log("La suma total es: " + suma);

    entrada.close();
});
