//

let texto = prompt("Ingresa un texto o palabra por favor:");
let arrayTexto = texto.split(' ');


for (let i = 0; i < arrayTexto.length; i++) {
    arrayTexto[i] = arrayTexto[i].toUpperCase();
}


console.log("Array de texto en mayúsculas:");
console.log(arrayTexto);