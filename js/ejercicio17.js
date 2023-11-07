// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Ingresa un texto:");

texto = texto.toLowerCase();

let posicionPrimeraVocal = -1;

for (let i = 0; i < texto.length; i++) {
    if (texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u') {
        posicionPrimeraVocal = i;
        break; 
    }
}

if (posicionPrimeraVocal !== -1) {
    console.log("La primera vocal está en la posición: " + posicionPrimeraVocal);
} else {
    console.log("No se encontraron vocales en el texto.");
}