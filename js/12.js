function Producto (nombre, edad, nacionalidad){
    this.nombre = nombre;
    this.edad = edad;
    this.nacionalidad = nacionalidad;
}
const nombre_1 = new Producto("Jhon",23,"Colombia");
const nombre_2 = new Producto("Edinson",20,"Chile");
console.log(nombre_1);
console.log(nombre_2);