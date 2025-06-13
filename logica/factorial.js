/*
*Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/

let n = Number(prompt("Ingresa un número entero:"))

function factorial(n) {
    if (n === 1){
        return 1;//cuando es 1,
    }
    return n*factorial(n - 1);//calcula factorial de n
}
if (n >= 1) {
  let resultado = factorial(n);//se cumple la condición
  console.log(`El factorial de ${n} es: ${resultado}`);
} else {
  console.log("Por favor, ingresa un número entero válido mayor o igual a 1.");
}