//Aprediendo herencia en JavaScript
class Informacion {
    constructor (descripcion){
        this.descripcion = descripcion;
    }
    mostrarDescripcion(descripcion){
        return `La descripcion del producto es: ${this.descripcion} `;
    }

}

class Libro extends Informacion{
    constructor(nombre, precio, id,descripcion){
        super(descripcion);
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
    }
    mostrarProducto(){
        return `El libro ${this.nombre} tiene un valor de ${this.precio} con su ID ${this.id}, ${super.mostrarDescripcion()}`;
    }
}

producto = new Informacion ("Es un libro de alta demanda para la informatica");
producto2 = new Libro ("Docker", 99.99, "Do159ker");

console.log(producto.mostrarDescripcion());
console.log(producto2.mostrarProducto());