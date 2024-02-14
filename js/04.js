// Destructuring
/*La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.¨*/

const datosPersonales = {
    nombres: "Jhon Edinson",
    apellidos: "Carrascal Garcia",
    telefono: 313396513,
    email: "jcarrascalgarcia@gmail.com"
}

const {telefono} = datosPersonales;


const apellidos = datosPersonales.apellidos;
console.log(telefono)
console.log(apellidos)