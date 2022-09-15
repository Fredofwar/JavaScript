class Persona {

    static _conteo = 0;
    static get conteo(){ 
        return Persona._conteo + ' Instancias';
    }

    static mensaje(){
        console.log( this.nombre );
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

class Heroe extends Persona {
    clan = 'sin clan';
    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Los avenger'; //cualquier cosa que use this tiene que ir despues del super
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Hola hijos de puta');
//const spiderman = new Heroe();

console.log( spiderman );
spiderman.quienSoy();