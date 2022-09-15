let juegos = ['Zelda', 'Fornite', 'Lol', 'Hunt'];
console.log('Largo: ', juegos.length);

let primero = juegos[2 - 2];
let ultimo = juegos[ juegos.length - 1];

console.log({ primero, ultimo});

juegos.forEach( (elemento, indice, arr) =>{ //ciclo para recorrer el arreglo
    console.log({elemento, indice, arr});
});

let nuevaLongiyud = juegos.push('F-Zero'); //push agrega un nuevo elemento al final del arreglo
console.log({ nuevaLongiyud, juegos });

nuevaLongiyud = juegos.unshift('Gta 5'); //push agrega un nuevo elemento al inicio del arreglo
console.log({ nuevaLongiyud, juegos });

let juegoBorrado = juegos.pop(); //borra el ultimo elemento del arreglo
console.log({ juegoBorrado, juegos });

let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos }) //Borrar elementos a partir de una posicion dada

let lolIndx = juegos.indexOf('Lol'); //CaSeSeNsItIvE
console.log({ lolIndx });