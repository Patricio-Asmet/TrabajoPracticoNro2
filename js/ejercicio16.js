// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto = prompt("Ingresa un texto:");

let textoAlReves = '';

for (let i = texto.length - 1; i >= 0; i--) {
    textoAlReves += texto[i];
}
document.write("Texto al revés: " + textoAlReves);