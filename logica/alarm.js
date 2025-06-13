/*
 * Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
1. solicitar los segundos que desea esperar
 */
//se guarda en la variable llamada segundos
let segundos = Number(prompt("¿Cuántos segundos faltan para que suene la alarma?"));//Number convierte el valor de prompt en número
//función de temporizador, se ejecutará despues de cierto tiempo (ejecuta lo que hay dentro de la función =>)
setTimeout(() => {
  console.log(`Hora de dormir después de ${segundos} segundo(s).`);
}, segundos * 1000);//setTimeout muestra el tiempo en segundos, por eso hay que convertirlo en segundos multiplicando por 1000