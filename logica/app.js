let counter = 0;
const username = prompt("Ingresa tu nombre de usuario: ");
const age = prompt("Ahora ingresa tu edad: ");
const favoriteMovies = [];
//vamos a pedir 5 peliculas primero
alert("A continuacion te vamos a pedir tus 5 peliculas favoritas");
for (let i = 1; i<= 5; i++){
    //los strings dentro de `` se conocen como string literal.
    //concatenar variables y texto de una forma más sencilla y legible
    favoriteMovies.push(prompt(`Ingresa la pelicula numero ${i}`));
    //equivale a "Ingresa la pelicula número " + i + ": "
}
console.log(`Hola soy ${username} tengo ${age} años y mis peliculas favoritas son:
    `);

while(counter < favoriteMovies.length){
    console.log(`Mi pelicula favorita numero ${counter + 1} es ${favoriteMovies[counter]}`);
    counter++;//para evitar un bucle infinito
    /**
     * mientras ( contador < longitud arreglo)
0<5 = verdadero
1<5 = verdadero
2<5 = verdadero
3<5 = verdadero
4<5 = verdadero
5<5 = falso
     */
}