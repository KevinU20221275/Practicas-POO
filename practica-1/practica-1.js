class Carro {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.encendido = false;
    }
    encender() {
        this.encendido = true;
        console.log(`El ${this.marca} ${this.modelo} está encendido.`);
    }
    apagar() {
        this.encendido = false;
        console.log(`El ${this.marca} ${this.modelo} está apagado.`);
    }
    conducir() {
    if (this.encendido) {
        console.log(`Conduciendo el ${this.marca} ${this.modelo}...`);
        } else {
        console.log(`No puedes conducir, el carro está apagado.`);
        }
    }
}
   
// Uso de la clase Carro
const carro1 = new Carro("Toyota", "Corolla", 2022);
carro1.encender();
carro1.conducir();
carro1.apagar();

console.log("\n")

const carro2 = new Carro("Ford", "Mustang", 2021);
carro2.conducir();

console.log("\n")

const carro3 = new Carro("Nissan", "Sentra", 2021);
carro3.encender();
carro3.apagar();

console.log("\n")

const carro4 = new Carro("Chevrolet", "Silverado 1500", 2021)
carro4.encender();
carro4.conducir();
carro4.apagar();

console.log("\n")

const carro5 = new Carro("Kia", "Stinger", 2024)
carro5.encender();
carro5.conducir();
carro5.apagar();

console.log("\n")