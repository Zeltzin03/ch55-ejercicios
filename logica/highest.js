/*
 * Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
1. Solicitamos los 10 números
 */

const numeros = [] //aquí guardamos los números
let mayor;//aquí guardamos el número mayor

for (let i = 0; i < 10; i++) {
   let entrada = Number(prompt(`Ingresa el número ${i}:`));
   numeros.push(entrada);//sigo agregando números
  if ( i=== 0 || entrada > mayor) {//declaro la primer entrada como la mayor hasta conocer el siguiente valor, entonces si hago la comparación para saber cúal es el mayor
    mayor = entrada;//y ese será mi valor mayor
  }
}
console.log("Los números son:", numeros);
console.log("El número mayor es:", mayor);