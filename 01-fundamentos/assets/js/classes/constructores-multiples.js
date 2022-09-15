class Persona{

    static porObjeto({ nombre, apellido, pais}){ // aqui llega un objeto pero hacemos destructuracion
        return new Persona(nombre, apellido, pais);
    }

    constructor( nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(`Info: ${ this.nombre}, ${ this.apellido }, ${this.pais}`);
    }
}

const fred = {
    nombre: 'Fredie',
    apellido: 'Armenta',
    pais: 'Mexico'
}

const persona1 = new Persona('Edahi', 'Armenta', 'Francia');
const persona2 = Persona.porObjeto(fred);

persona1.getInfo();
persona2.getInfo();