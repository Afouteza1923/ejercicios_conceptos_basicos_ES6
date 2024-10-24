//TODO Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto
//TODO y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste
//TODO como parametro.

//TODO Haz varios ejemplos y compruebalos.

//TODO Sugerencia de función:

function findArrayIndex(array, text) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === text) {
            return text;
        }
    }
    return 'no encontrado en este array';
}

//TODO Ej array:

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log (findArrayIndex (mainCharacters, 'Leia'));
console.log (findArrayIndex (mainCharacters, 'Han Solo'));
console.log (findArrayIndex (mainCharacters, 'Yoda'));
console.log (findArrayIndex (mainCharacters, 'Anakin'));
console.log (findArrayIndex (mainCharacters, 'Darh Vader'));