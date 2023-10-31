//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let textoConcatenado = '';
let entrada;

do {
    entrada = prompt("Introduce una cadena de texto (o escribe 'cancelar' para salir):");
    if (entrada !== "cancelar") {
        if (textoConcatenado !== '') {
            textoConcatenado += '-' + entrada;
        } else {
            textoConcatenado += entrada;
        }
    }
} while (entrada !== "cancelar");

if (textoConcatenado !== '') {
    document.write("Cadenas concatenadas:", textoConcatenado);
} else {
    document.write("No se han introducido cadenas.");
}