//Declaracion de la funcion 

function suma (num1, num2){
    console.log( num1 + num2);
}
suma(10, 10);

//Expresion de funcion

let multiplicacion = function(num1, num2){
    console.log(num1 * num2);
}
multiplicacion(10, 5);


//Ejercicio Basico con funciones

let total = 0 ;

function carrito (precio){
    return total +=precio;
}
function descuento(total){
    return 0.50 * total;
}

carrito(200);
carrito(500);

let resultadoFinal = descuento(total);

console.log(total);
console.log(resultadoFinal);