 class Rectangulo {
    #area = 0; //propiedad privada

    constructor(base=0, altura=0){
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }
 }

 const rectangulo = new Rectangulo(10, 15);

 console.log(rectangulo);
 
 //https://caniuse.com/mdn-javascript_classes_private_class_fields
 //https://www.toptal.com/developers/javascript-minifier