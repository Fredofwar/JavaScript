//Todos los primitivos son pasados por valor 
//Todos los objetos son pasados por referencia en js todos son objetos exceptuando los primitivos

let a = 10;
let b = a;
a = 30;

console.log({ a, b });

let juan = { nombre: 'Juan' };
let ana = {...juan}; //operador spread ... no confundir con el parametro rest
ana.nombre = 'Ana';

console.log({ juan, ana });

const cambiaNombre = ({ ...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log({ peter, tony });

//Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('Slice');
const otrasFrutas = frutas.slice(); //Hace lo mismo de arriba pero con metodo slice
console.timeEnd('Slice');

console.time('Spread');
const otrasFrutas2 = [...frutas]; //Rompe relacion del objeto por referencia 
console.timeEnd('Spread');


otrasFrutas.push('Mango');
console.table({ frutas, otrasFrutas });