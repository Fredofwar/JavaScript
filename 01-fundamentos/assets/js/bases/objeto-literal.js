let personaje = { //Objeto literal
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat:34.034,
        long: -118.70
    },
    trajes: ['Mark I', 'Marck V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'infinity war'
};

console.log(personaje);
console.log('Nombre', personaje.nombre); //Acceder a una porpiedad
console.log('Nombre', personaje['nombre']); //Lo mismo de arriba pero con diferente notacion
console.log('Edad', personaje.edad);

console.log('Coors', personaje.coords);
console.log('Latitud', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length);
console.log('Ultimo Traje', personaje.trajes[personaje.trajes.length -1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Ultima pelicula', personaje['ultima-pelicula']);

//Mas detalles

delete personaje.edad;
console.log( personaje );

personaje.casado = true;

const entriesPares = Object.entries( personaje );
console.log( entriesPares );

Object.freeze( personaje ); //Congela el objeto para no manipular dicho objeto agregando/eliminando/cambiando mas propiedades etc
//Si se puede manipular objetos dentro de este objeto por ejemplo: No puede manipular direccion pero si direccion.ubicacion
personaje.dinero = 1000000;
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );//Listado de propiedades que tiene un objeto
const valores = Object.values( personaje );
console.log({ propiedades, valores });

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object


