//TODO Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga
//TODO el dado que deberá simular el codigo dentro de la función. Como hemos dicho, que la función use el parametro
//TODO para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio
//TODO no te preocupes! Busca información sobre la función de javascript Math.random()

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
  }

console.log(rollDice(6));  
console.log(rollDice(20)); 
console.log(rollDice(12));
console.log(rollDice(48)); 