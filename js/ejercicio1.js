/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años
      mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
 */
const edad = parseInt(prompt('Ingrese la edad de la persona'));

if(edad >= 18) {
      document.write("Tiene edad permitida para conducir");
}else{
      document.write("Aun no tiene edad para conducir");
}