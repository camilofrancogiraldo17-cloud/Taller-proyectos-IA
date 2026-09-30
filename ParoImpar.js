const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Ingrese un número: ", function(numero) {

    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }

    entrada.close();
});
