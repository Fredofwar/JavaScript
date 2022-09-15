const regresaTrue = ()=>{
    console.log('Regresa true');
    return true;
}

const regresaFalse = ()=>{
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negacion');
console.log( true ); //true
console.log( !true ); //false
console.log( !false ); //true
console.log( !regresaFalse() ); //true

console.warn('And'); // true si todos los valores son verdaderos
console.log( true && true);//true
console.log( true && false);//false

console.log('=======');
console.log( regresaFalse() && regresaTrue() ); //false en este caso si al principio encuentra un false no ejecuta todo lo demas 
console.log( regresaTrue() && regresaFalse() );

regresaTrue() && regresaFalse(); //Esto es valido ejecuta la segunda si la primera es true


console.warn('OR');// true
console.log( true || false ); //Solo necesita un true para que sea true
console.log( false || false ); //false
console.log( regresaTrue() || regresaFalse() ); //no ejecuta las demas instrucciones si encuentra un true 
console.log( regresaFalse() && regresaTrue() );


console.warn('Asignaciones');// Asignaciones

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo';
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({ a1, a2, a3, a4, a5});
