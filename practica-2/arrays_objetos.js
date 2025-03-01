// kevin antonio montano aquino U20221275
// practica 2


const personas = [
    {
    nombre: "Mario",
    edad: 20,
    comidaFavorita: "tacos",
    },
    {
    nombre: "Karla",
    edad: 24,
    comidaFavorita: "Camarones empanizados",
    },
    {
    nombre: "Jose",
    edad: 15,
    comidaFavorita: "Pizza",
    },
  ];
  
// kevin antonio montano aquino U20221275
// Practica 2 Arrays y Objetos

// metodo para recorrer la estructura de datos
function mostrarDatosPersonas(personas){  
    personas.forEach((persona) => {
        for (key in persona){
            console.log(key, ':', persona[key])
        }
        console.log('\n')
    })
}
  
mostrarDatosPersonas(personas)