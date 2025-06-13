/*
 * Positive dominance in Array
 

Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
*Un arreglo es dominante positiva si hay más números positivos que negativos o ceros.
1. contar cuantos elementos son positivos
2. si mas de la mitad(del total) son positivos, entonces es true
3. si menos de la mitad son positivos es false 
 */
function positiveDom(array) {//el arreglo
  let positivos = 0;
  for (let i = 0; i < array.length; i++) {//lo mismo que en otros bucles, va viendo que numero es menor que la cantidad de numeros
    if (array[i] > 0) {
      positivos++;
    }
  }

  // Comparamos si los positivos son más de la mitad
  return positivos > array.length / 2;
}
console.log(positiveDom([-1, -3, -5, 4, 6767]));//dará un false
console.log(positiveDom([2, 54, -82, -45, 7, 38]));//dará un true
