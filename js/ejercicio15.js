//15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Ingresa un texto:");

texto = texto.toLowerCase();

let contadorVocales = 0;

for (let i = 0; i < texto.length; i++) {
    if (texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u') {
        contadorVocales++;
    }
}

document.write("El número de vocales en el texto es: " + contadorVocales);