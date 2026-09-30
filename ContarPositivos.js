const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Ingrese los números separados por espacios: ", function(datos) {

    if (datos.trim() === "") {
        console.log("La lista está vacía");
        entrada.close();
        return;
    }

    let numeros = datos.split(" ");
    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {

        if (Number(numeros[i]) > 0) {
            contador++;
        }
    }

    console.log("La cantidad de números positivos es: " + contador);

    entrada.close();
});
