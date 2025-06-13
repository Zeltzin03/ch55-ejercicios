/*
*Factorial
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

*Palindromo = Es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
*/

let palabra = prompt("Ingresa una palabra para saber si es un palíndromo:");
//tenemos que quitar espacios o puntuación y pasar a minisculas
let palabra2 = palabra.toLocaleLowerCase()
//tenemos que invertir el texto
let invertido = palabra2.split("").reverse().join("");
//split = lo convierte en un array o cadena de solo letras 
//reverse = lo voltea
//join = lo vuelve a unir
if (invertido === palabra2){
    console.log("Es un palíndromo");
}else {
    console.log("No es un palindromo");
}
