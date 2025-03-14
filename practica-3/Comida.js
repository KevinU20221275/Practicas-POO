/**
 * Description placeholder
 *
 * @class Comida
 * @typedef {Comida}
 */
class Comida {
    /**
     * Creates an instance of Comida.
     *
     * @constructor
     * @param {string} nombre 
     * @param {string} tamaño 
     * @param {number} precio 
     */
    constructor(nombre, tamaño, precio){
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.precio = precio;
    }

    /**
     * Description placeholder
     *
     * @returns {string} 
     */
    informacion(){
        return `Nombre : ${this.nombre} \nTamaño: ${this.tamaño} \nPrecio: ${this.precio}`
    }
}


/**
 * Description placeholder
 *
 * @type {Comida}
 */
let burrito = new Comida("Burrito", "Grande", 4.99)
console.log(burrito.informacion())
console.log("\n")

/**
 * Description placeholder
 *
 * @type {Comida}
 */
let pizza = new Comida("Pizza", "Mediana", 7.99)
console.log(pizza.informacion())
console.log("\n")


/**
 * Description placeholder
 *
 * @class Bebida
 * @typedef {Bebida}
 * @extends {Comida}
 */
class Bebida extends Comida{
    /**
     * Creates an instance of Bebida.
     *
     * @constructor
     * @param {string} nombre 
     * @param {string} tamaño 
     * @param {number} precio 
     * @param {boolean} refil 
     */
    constructor(nombre, tamaño, precio, refil){
        super(nombre, tamaño, precio)
        this.refil = refil;
    }

    /**
    * Description placeholder
    *
    * @returns {string} 
    */
    informacion(){
        return `${super.informacion()} \nRefil: ${this.refil ? 'Si' : 'No'}`
    }
}

/**
 * Description placeholder
 *
 * @type {Bebida}
 */
let liquado = new Bebida("Liquado de Fresa", "XL", 1.25, false)
console.log(liquado.informacion())
console.log("\n")


class Entrada extends Comida {
    constructor(nombre, tamaño, precio, sabor){
        super(nombre, tamaño, precio)
        this.sabor = sabor;
    }

    /**
    * Description placeholder
    *
    * @returns {string} 
    */
    informacion(){
        return `${super.informacion()} \nSabor: ${this.sabor}`
    }
}

/**
 * Description placeholder
 *
 * @type {Entrada}
 */
let nachos = new Entrada("Nachos", "Pequeño", 2.5, "Picante")
console.log(nachos.informacion())