/*
 * Array of Multiples
 

Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 */
function arrayMultiples(numero,longitud){
    let resultado = [];//guardamos los multiplos, aquí esta vacío
for (let i = 1; i <= longitud; i++){
    //for será el bucle que se repite varias veces para obtener todos los multiplos
    //el primer multiplo de un número es 1, por eso comenzamos en 1
    //Mientras i sea menor o igual a la longitud, el bucle se sigue ejecutando.
    resultado.push(numero *i);
    //numero * i: va calculando el multiplo
    //push va agregando el número al final
}
return resultado;//devuelve el arreglo completo
}
console.log(arrayMultiples(2, 10)); 
console.log(arrayMultiples(17, 6));