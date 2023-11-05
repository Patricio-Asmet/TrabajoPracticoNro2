/*
4- Realiza un script que pida números hasta que se pulse “cancelar”.
   Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let suma = 0;
let continuar = true;
let contador = 0;

while (continuar) {
    let valorIngresado = prompt("Introduce un número(o presiona 'cancelar' para salir):");

    if (valorIngresado === null) {
        continuar = false;
    } else {
        let numero = parseFloat(valorIngresado);

        if (isNaN(numero)) {
            alert("¡No es un número válido! Introduce un número válido.");
        } else {
            suma += numero;
            contador++;
        }
    }
}

if (contador > 0) {
    alert(`La suma total de los ${contador} números introducidos es: ${suma}`);
} else {
    alert("No se introdujeron números.");
}