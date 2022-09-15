class Singleton {
    
    static instancia; //indefined
    nombre = '';

    constructor(nombre = ''){

        const a = undefined;
        console.log(a); // undefined
        console.log(!a);// true
        console.log(!!a);// false
        
        if(!!Singleton.instancia){
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
        //return this;

    }

}

const inst1 = new Singleton('Ironman');
const inst2 = new Singleton('Spiderman');
const inst3 = new Singleton('Blackpanther');

console.log(`Nombre en la inst1 es: ${ inst1.nombre }`);
console.log(`Nombre en la inst2 es: ${ inst2.nombre }`);
console.log(`Nombre en la inst3 es: ${ inst3.nombre }`);