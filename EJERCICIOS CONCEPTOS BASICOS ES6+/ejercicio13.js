//TODO Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada
//TODO removeItem que pasandole un array y un texto como parametros (los mismos parametros que en el anterior
//TODO ejercicio) llame a la función anteriormente creada findArrayIndex y obten el indice para posteriormente
//TODO usar la función de javascript .splice() para eliminar el elemento del array.

//TODO Finalmente retorna el array.

//TODO De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];
  
  function findArrayIndex(array, text) {
    for (let index = 0; index < array.length; index++) {
      if (array[index] === text) {
        return index;
      }
    }
    return -1; 
  }
  
  function removeItem(array, text) {
    const index = findArrayIndex(array, text); 
    
    if (index !== 'No encontrado en este array') { 
      array.splice(index, 1); 
    }
    
    return array; 
  }

console.log (removeItem (mainCharacters, 'Leia'));
console.log (removeItem (mainCharacters, 'Han Solo'));
console.log (removeItem (mainCharacters, 'Yoda'));
console.log (removeItem (mainCharacters, 'Anakin'));
console.log (removeItem (mainCharacters, 'Darh Vader'));
console.log (removeItem (mainCharacters, 'Anakin'));
  
  