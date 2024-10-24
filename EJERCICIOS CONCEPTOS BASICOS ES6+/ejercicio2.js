//TODO 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
//TODO del objeto usando object destructuring e imprimelas por consola. Cuidado, 
//TODO no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game;

console.log (title);
console.log (gender);
console.log (year);

//TODO 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
//TODO llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
//TODO imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log (fruit1);
console.log (fruit2);
console.log (fruit3);

//TODO 2.3 En base al siguiente javascript, usa destructuring para crear 2 
//TODO variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name: animalName, race} = animalFunction ();

console.log (animalName);
console.log (race);

//TODO 2.4 En base al siguiente javascript, usa destructuring para crear las 
//TODO variables name y itv con sus respectivos valores. Posteriormente crea 
//TODO 3 variables usando igualmente el destructuring para cada uno de los años 
//TODO y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name: carName, itv} = car;
const [itv1, itv2, itv3] = itv;

console.log (carName);
console.log (itv);
console.log (itv1);
console.log (itv2);
console.log (itv3);