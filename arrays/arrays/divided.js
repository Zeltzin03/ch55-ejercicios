/*
 * Number divided into halves
 

Given a number, return the number divided into its halves in an array.
 

Examples:
- `numDiv(4)` should return `[2, 2]`.
- `numDiv(10)` should return `[5, 5]`.
 */
function numDiv(num) {
  let mitad = num / 2;//dividimos el número en 2 y guardamos en mitad
  return [mitad, mitad];
}
let numero = 10; //cambias el número que quieras
let resultado = numDiv(numero);
console.log(`(${numero}) mitades [${resultado[0]}, ${resultado[1]}]`);