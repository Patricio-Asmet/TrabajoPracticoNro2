/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let numeroUsuario = parseInt(prompt("Por favor, ingresa un número menor o igual a 50:"));

if (numeroUsuario <= 50) {
    for (let i = 1; i <= numeroUsuario; i++) {
        let linea = '';
        for (let j = 0; j < i; j++) {
            linea += i; 
        }
        document.write(linea + "<br>");
    }
} else {
    document.write("El número ingresado es mayor que 50. Por favor, ingresa un número válido.");
}