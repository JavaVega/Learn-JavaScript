// Unir dos objetos en JavaScript de la forma Spread Operator
const datosPersonales = {
    nombres: "Jhon Edinson",
    apellidos: "Carrascal Garcia",
    telefono: 313396513,
    email: "jcarrascalgarcia@gmail.com"
}

const gustosPersonales = {
    nadar: true,
    correr: true,
    comer: true,
    Cantar: false
}

const jhonCarrascal ={ ...datosPersonales, ...gustosPersonales};

console.log(jhonCarrascal);