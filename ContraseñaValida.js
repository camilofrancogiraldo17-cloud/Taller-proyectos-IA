const readline = require("readline");

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Ingrese una contraseña: ", function(contrasena) {

    const tieneOchoCaracteres = contrasena.length >= 8;
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    const tieneNumero = /[0-9]/.test(contrasena);

    if (tieneOchoCaracteres && tieneMayuscula && tieneNumero) {
        console.log("La contraseña es válida");
    } else {
        console.log("La contraseña no es válida");

        if (!tieneOchoCaracteres) {
            console.log("- Debe tener al menos 8 caracteres");
        }

        if (!tieneMayuscula) {
            console.log("- Debe tener al menos una mayúscula");
        }

        if (!tieneNumero) {
            console.log("- Debe tener al menos un número");
        }
    }

    entrada.close();
});
