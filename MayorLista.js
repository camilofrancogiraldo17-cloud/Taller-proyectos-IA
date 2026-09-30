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
    let mayor = Number(numeros[0]);

    for (let i = 1; i < numeros.length; i++) {

        if (Number(numeros[i]) > mayor) {
            mayor = Number(numeros[i]);
        }
    }

    console.log("El número mayor es: " + mayor);

    entrada.close();
});
