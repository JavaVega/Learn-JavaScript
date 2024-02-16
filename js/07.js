//Arrey methos

const meses = ["Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


const carrito = [
    { nombre : "Computador", precio: 1200000, marca: "Lenovo" },
    { nombre : "Mesa de escritorio", precio: 200000, marca: "sentar" },
    { nombre : "camisa", precio: 5000, marca: "ArturoCalle" },
    { nombre : "casco", precio: 120000, marca: "toshiba" },
]

meses.forEach( function(mes){
    if ("Septiembre" === mes) {
        console.log("Este mes si Existe");
    }
});
// Array with the method .include
let resultado = meses.includes("Septiembre");
console.log(resultado);

//Array with the method .some

resultado = carrito.some(producto => producto.precio === 5000)
console.log (resultado);

//.reduce
resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0 );
console.log(resultado);

// .fitler

resultado = carrito.filter(function(producto){
    return producto.precio > 6000;
});
console.log(resultado);
