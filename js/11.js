const carrito = [
    { nombre: "Leche Entera", Precio: 2.50, Categoria: "Lacteos", lugar: "Colombia"},
    { nombre: "Pan Integral", Precio: 1.80, Categoria: "Panaderia", lugar: "Chile"},
    { nombre: "Manzanas (1 kg)", Precio: 3.99, Categoria: "Frutas y Verduras", lugar: "Argentina"},
    { nombre: "Pasta (500g)", Precio: 1.20, Categoria: "Alimentos Secos", lugar: "Colombia"},
    { nombre: "Pollo Fresco (1 kg)", Precio: 5.50, Categoria: "Carnes", lugar: "Colombia"},
    { nombre: "Yogur Natural", Precio: 1.75, Categoria: "Lacteos", lugar: "Chile"},
    { nombre: "Cereal Integral", Precio: 2.99, Categoria: "Desayuno", lugar: "Chile"},
    { nombre: "Detergente para Ropa", Precio: 4.25, Categoria: "Artículos de Limpieza", lugar: "Colombia"},
    { nombre: "Champú Suave", Precio: 3.50, Categoria: "Cuidado Personal", lugar: "Argentina"},
    { nombre: "Galletas de Chocolate", Precio: 2.00, Categoria: "Snacks", lugar: "Argentina"},
]

carrito.forEach(producto => console.log(producto.Categoria));

arreglo_1 = carrito.forEach( producto => console.log(producto.nombre));
