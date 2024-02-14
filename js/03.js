//Teoria de Objetos en JavaScript
const datosPersonales = {
    nombres: "Jhon Edinson",
    apellidos: "Carrascal Garcia",
    telefono: 313396513,
    email: "jcarrascalgarcia@gmail.com"
}

console.log(datosPersonales.telefono);


// Agregar un atributo al objeto

datosPersonales.edad = 23;


// Eliminar un atributo del objeto 

delete datosPersonales.telefono;
console.log(datosPersonales);
