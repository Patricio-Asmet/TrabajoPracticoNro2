/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

let nombre1 = prompt("Ingresa el primer nombre:");
let edad1 = parseInt(prompt("Ingresa la primera edad:"));
let nombre2 = prompt("Ingresa el segundo nombre:");
let edad2 = parseInt(prompt("Ingresa la segunda edad:"));
let nombre3 = prompt("Ingresa el tercer nombre:");
let edad3 = parseInt(prompt("Ingresa la tercera edad:"));

let mayorEdad = Math.max(edad1, edad2, edad3);

let nombreMayorEdad;
if (mayorEdad === edad1) {
    nombreMayorEdad = nombre1;
} else if (mayorEdad === edad2) {
    nombreMayorEdad = nombre2;
} else {
    nombreMayorEdad = nombre3;
}

document.write("El nombre del o la mayor es: " + nombreMayorEdad);