//Teoria en Array 

const meses = ["Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio"];

console.log(meses);
console.table(meses);


//eL ForEach es una bucle que ayuda a ejecutar todo el array que tenga
meses.forEach(function(meses){
    console.log(meses)
})

//Agregar una atributo al array

//Con el metodo de .push agregara el dato al final del arreglo
meses.push("Julio");

//Con el metodo de .unshift agregara el dato al inicio del arreglo
meses.unshift("Diciembre");

//Con el metodo de .pop elimina el dato al final del arreglo
meses.pop();

//Con el metodo de .pop elimina el dato al final del arreglo
meses.shift();


//Con el metodo de .splice toma en cuenta dos datos  para eliminar

meses.splice(2, 1);
console.log(meses);

//Rest operator o Spread operator

let nuevoArreglo = [...meses, "Noviembre"];
console.log(nuevoArreglo);