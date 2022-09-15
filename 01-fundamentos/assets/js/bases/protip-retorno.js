//function crearPersona( nombre, apellido){
    //return {
        //nombre, //nombre: nombre siempre y cuando la propiedad y el nombre de la variable sean igual
        //apellido //apellido: apellido
    //}
//}

const crearPersona = ( nombre, apellido) => ({ nombre, apellido});

const persona = crearPersona('Demian', 'Armenta');
console.log( persona );

function imprimeArgumentos(){
    console.log( arguments );
}

const imprimeArgumentos2 = (edad, ...args) => { //referencia a un parametros rest
    //Despues del parametro rest no puede ir otro argumento ...args, otroParam
    //Antes se pueda sacar una propiedad del arreglo edad, ...args 
    console.log( edad, args );
    return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Demian', 'Hola');
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona('Demian', 'Armenta');
console.log({ nuevoApellido });

//DESTRUCTURACION DE ARGUMENTOS
let tony = { 
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Marck V', 'Hulkbuster']
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({nombre});
    console.log({codeName}); 
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );
