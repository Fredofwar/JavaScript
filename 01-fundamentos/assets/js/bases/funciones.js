function saludar( nombre ){ 
    console.log( arguments ); //Todas las funciones tradicionales (function) internamente contienen un objeto arguments 
    //arguments hace referencia a todos los elementos enviados a la funcion
    console.log('Hola '+nombre);//Si una variable esta declarada pero no inicializada = undefined
    return [1,2,3,4,5];

    console.log('Soy un codigo que esta despues del return');//Esto nunca se va a ejecutar
}

const saludar2 = function( nombre ){ //Funcion anonima
    console.log('Hola '+nombre);
}

const saludarFlecha = () => {
    console.log('Hola flecha');
}

const saludarFlecha2 =( nombre ) => { //Puede ir sin parentesis const saludarFlecha2 = nombre =>
    console.log('Hola flecha '+nombre);
}

const retornoSaludar = saludar( 'Edahi', 40, true, 'Costa Rica' ); //Cuando la funcion llamada no tiene return codificado esta retorna undefined
console.log( retornoSaludar );

//saludar2( 'Edahi' );
//saludarFlecha('Demian');

function sumar( a,b ){
    return a + b;
}

const sumar2 = (a,b) => {
    return a + b;
}

const sumar3 = (a,b) => a + b; //Esto solo se hace si lo unico que se va a ejecutar es un return

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( getAleatorio2() );