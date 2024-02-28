// Ejercicios externo_1 Saludo
// Escriba un programa que pida al usuario que escriba su nombre, y lo salude llamándolo por su nombre.
/*
let nombre = "";
nombre = prompt("¿Cómo te llamas?");
console.log("HOLA " + nombre);
*/
//Ejercicios externo_2 Círculos
// Escriba un programa que reciba como entrada el radio de un círculo y entregue como salida su perímetro y su área:
/*
let radio;
radio = prompt("Cual es la medida del radio:");
perimetro = ((2*Math.PI)*radio);
area = Math.PI * (radio * radio);
console.log(`El perimetro de su circulo es de ${perimetro}, y el area es de ${area}`);
*/
// Ejercicios externo_3 Promedio
// Escriba un programa que calcule el promedio de 4 notas ingresadas por el usuario:
/*
let promedio = 0;
let calificacion_1,
    calificacion_2,
    calificacion_3,
    calificacion_4;

calificacion_1 = parseInt(prompt("Primera calificacion:"));
calificacion_2 = parseInt(prompt("Segunda calificacion:"));
calificacion_3 = parseInt(prompt("Tercera calificacion:"));
calificacion_4 = parseInt(prompt("Cuarta calificacion:"));
promedio = (calificacion_1 + calificacion_2 + calificacion_3 + calificacion_4)/4;
console.log(`El promedio de su calificación es de ${promedio}`);
*/
// Ejercicios externo_4 Conversión de unidades de longitud
// Escriba un programa que convierta de centímetros a pulgadas. Una pulgada es igual a 2.54 centímetros.
/*
let pulgada = 2.54;
let longitud = 0;
let conversion = 0;
longitud = parseFloat(prompt("Digite la logintud que quiere convertir: "));
conversion = longitud / pulgada;
alert(`Los ${longitud} en pulgadas es de: ${conversion}`);
*/
//Ejercicios externo_5 Número invertido
//Escriba un programa que pida al usuario un entero de tres dígitos, y entregue el número con los dígitos en orden inverso:
/*
function numeroInvertido(numero) {
    return Number(numero.toString().split('').reverse().join(''));
}
valor = prompt("Digitar el numero que quiere invertir");
console.log(numeroInvertido(valor));
*/

//Ejercicios externo_6 Pitágoras
// Escriba un programa que reciba como entrada las longitudes de los dos catetos a y b de un triángulo rectángulo, y que entregue como salida el largo de la hipotenusa c del triangulo, dado por el teorema de Pitágoras: c2=a2+b2
/*
function pitagoras (a, b){
    return c = Math.sqrt((a*a) + (b*b));
}
a = parseInt(prompt("Cual es la medida de cateto A: "));
b = parseInt(prompt("Cual es la medida de cateto B: "));
console.log( pitagoras(a, b));
*/
// Ejercicios externo_7 Hora futura
// Escriba un programa que pregunte al usuario la hora actual t del reloj y un número entero de horas h, que indique qué hora marcará el reloj dentro de h horas:
/*
let horaActual,
    horas,
    resultado;
horaActual = parseInt(prompt("Que horas son: "));
horas = parseInt(prompt("cuantas horas quiere que pase"));
function horaFutura(horaActual, horas){
    resultado = horaActual + horas;
    if ( resultado > 24){
        resultado = (horaActual + horas) % 24;
        alert (`En ${horas} horas, el reloj marcara las ${resultado}`);
    } else {
        alert (`En ${horas} horas, el reloj marcara las ${resultado}`);
    }
}
*/
//Ejercicios externo_8 Parte decimal
//Escriba un programa que entregue la parte decimal de un número real ingresado por el usuario.
/*
let decimal = 0;
decimal = parseFloat(prompt("Digitar el numero: "))
resultado = decimal % parseInt(decimal)
alert(resultado);
*/
//Ejercicios externo_9 Qué nota necesito
// Un alumno desea saber que nota necesita en el tercer certamen para aprobar un ramo.
// El promedio del ramo se calcula con la siguiente formula.
//  NC=(C1+C2+C3)/3     NF=NC⋅0.7+NL⋅0.3
// Donde NC es el promedio de certámenes, NL el promedio de laboratorio y NF la nota final.
// Escriba un programa que pregunte al usuario las notas de los dos primeros certamen y la nota de laboratorio, y muestre la nota que necesita el alumno para aprobar el ramo con nota final 60.
/*
let certamen_1,
    certamen_2,
    certamen_3,
    laboratorio;
certamen_1 = parseInt(prompt(" Ingrese nota certamen 1:"));
certamen_2 = parseInt(prompt(" Ingrese nota certamen 2:"));
laboratorio = parseInt(prompt(" Ingrese nota del laboratorio:"));

promedioCertamenes = ((60 - 19.5)/0.7);
certamen_3 = Math.round((promedioCertamenes * 3) - (certamen_1 + certamen_2));
alert(`Necesita nota ${certamen_3} en el certamen 3`);
*/


