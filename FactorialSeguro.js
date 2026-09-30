const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Ingrese un número: ", function(numero) {

    numero = Number(numero);

    if (numero < 0 || numero % 1 !== 0) {
        console.log("Número inválido");
        entrada.close();
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }

    console.log("El factorial es: " + factorial);

    entrada.close();
});
