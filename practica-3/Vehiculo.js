
/**
 * Description placeholder
 *
 * @class MedioTrasporte
 * @typedef {MedioTrasporte}
 */
class MedioTrasporte {
    /**
     * Creates an instance of MedioTrasporte.
     *
     * @constructor
     * @param {string} marca 
     * @param {string} modelo 
     * @param {int} año 
     */
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.encendido = false;
    }

    /**
     * Description placeholder
     *
     * @returns {string} 
     */
    caracteristicas(){
        return `Marca: ${this.marca} \nModelo: ${this.modelo} \nAño: ${this.año}`
    }
}

/**
 * Description placeholder
 *
 * @class Moto
 * @typedef {Moto}
 * @extends {MedioTrasporte}
 */
class Moto extends MedioTrasporte {
    /**
     * Creates an instance of Moto.
     *
     * @constructor
     * @param {string} marca 
     * @param {string} modelo 
     * @param {int} año 
     * @param {number} cilindrada 
     */
    constructor(marca, modelo, año, cilindrada){
        super(marca, modelo, año);
        this.cilindrada = cilindrada;
    }

    /**
    * Description placeholder
    *
    * @returns {string} 
    */
    caracteristicas(){
        return `${super.caracteristicas()} \nCilindrada: ${this.cilindrada} cc`
    }
}

/**
 * Description placeholder
 *
 * @type {Moto}
 */
let honda = new Moto("Honda", "Navi", 2025, 1.0)
console.log(honda.caracteristicas())