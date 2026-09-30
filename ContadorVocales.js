const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Ingrese una frase: ", function(frase) {

    let contador = 0;

    for (let i = 0; i < frase.length; i++) {

        if (
            frase[i] === "a" ||
            frase[i] === "e" ||
            frase[i] === "i" ||
            frase[i] === "o" ||
            frase[i] === "u"
        ) {
            contador++;
        }
    }

    console.log("La cantidad de vocales es: " + contador);

    entrada.close();
});
