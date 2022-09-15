
let a = 5;

if( a >= 10 ){//undefined, null, una asignacion
    console.log('A es mayor o igual a 10');
}else{
    console.log('A es menor a 10');
}
console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay();//0: Domingo, 1: Lunes, 2: Martes ...

// = Asignacion
// == Igual igual no importa sino son del mimso tipo de datos
// === Identico igual en valor e igual en tipo de  dato 
if(dia === 0){ 
    console.log('Domingo');
}else if(dia === 1){
    console.log('Lunes');
}else if(dia === 2){
    console.log('Martes');
}else if(dia === 3){
    console.log('Miercoles');
}else if(dia === 4){
    console.log('Jueves');
}else if(dia === 5){
    console.log('Viernes');
}else if(dia === 6){
    console.log('Sabado');
}

let diaTextto = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}

let diasLetras = {
    0: ()=> 'Domingo - 0',
    1: ()=> 'Lunes - 1',
    2: ()=> 'Martes - 2',
    3: ()=> 'Miercoles - 3',
    4: ()=> 'Jueves - 4',
    5: ()=> 'Viernes - 5',
    6: ()=> 'Sabado - 6'
}

let diasLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

console.log(diaTextto[dia] || 'Dia no definido');
console.log( diasLetras[dia]() ); //Asi ejecuta la funcion
console.log( diasLetras2[dia] ); 

