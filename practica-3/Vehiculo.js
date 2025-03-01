class MedioTrasporte {
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.encendido = false;
    }

    caracteristicas(){
        return `Marca: ${this.marca} \nModelo: ${this.modelo} \nAño: ${this.año}`
    }
}

class Moto extends MedioTrasporte {
    constructor(marca, modelo, año, cilindrada){
        super(marca, modelo, año);
        this.cilindrada = cilindrada;
    }

    caracteristicas(){
        return `${super.caracteristicas()} \nCilindrada: ${this.cilindrada} cc`
    }
}

let honda = new Moto("Honda", "Navi", 2025, 1.0)
console.log(honda.caracteristicas())