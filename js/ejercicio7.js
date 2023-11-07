/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let numeroUsuario = parseInt(prompt("Por favor, ingresa un número menor o igual a 50:"));

if (numeroUsuario <= 50) {
    for (let i = numeroUsuario; i >= 1; i--) {
        let linea = '';
        for (let j = 0; j < i; j++) {
            linea += i;
        }
        document.write(linea + "<br>");
    }
} else {
    document.write("El número ingresado es mayor que 50. Por favor, ingresa un número válido.");
}