class Persona {

    static _conteo = 0;
    static get conteo(){ //este metodo get puede utilizarse sin instanciar la clase previamente
        return Persona._conteo + ' Instancias';
    }

    static mensaje(){
        console.log( this.nombre );//Esto da undefined porque no se puede tranajar con atributos que requieren instancia
        console.log('Hola, soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo ++ ;
    }

    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida de ${this.nombre} es ${ this.comida }`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Hola hijos de puta');
const ironman = new Persona('Tony Stark', 'Ironman', 'Soy el puto amo!');

//console.log( ironman );

spiderman.miFrase();
//ironman.miFrase();

spiderman.setComidaFavorita = 'Arañas con frijoles';
//spiderman.comida = 'Duende verde';

console.log( spiderman.getComidaFavorita );

console.log( spiderman );

console.log( 'Conteo statuco', Persona._conteo );
console.log( Persona.conteo );
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo'; //Define una propiedad statica externa fuera de la clase
console.log(Persona.propiedadExterna);
console.log(Persona);
