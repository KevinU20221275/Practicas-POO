class Comida {
    constructor(nombre, tamaño, precio){
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.precio = precio;
    }

    informacion(){
        return `Nombre : ${this.nombre} \nTamaño: ${this.tamaño} \nPrecio: ${this.precio}`
    }
}


let burrito = new Comida("Burrito", "Grande", 4.99)
console.log(burrito.informacion())
console.log("\n")

let pizza = new Comida("Pizza", "Mediana", 7.99)
console.log(pizza.informacion())
console.log("\n")


class Bebida extends Comida{
    constructor(nombre, tamaño, precio, refil){
        super(nombre, tamaño, precio)
        this.refil = refil;
    }

    informacion(){
        return `${super.informacion()} \nRefil: ${this.refil ? 'Si' : 'No'}`
    }
}

let liquado = new Bebida("Liquado de Fresa", "XL", 1.25, false)
console.log(liquado.informacion())
console.log("\n")


class Entrada extends Comida {
    constructor(nombre, tamaño, precio, sabor){
        super(nombre, tamaño, precio)
        this.sabor = sabor;
    }

    informacion(){
        return `${super.informacion()} \nSabor: ${this.sabor}`
    }
}

let nachos = new Entrada("Nachos", "Pequeño", 2.5, "Picante")
console.log(nachos.informacion())