// Bucles - Loop

const meses = ["Enero", "Febrero", "Marzo", "Abril","Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// FOR Loop
// for (let i = 0; i < meses.length; i++) {
//     console.log(meses[i]);
// }
/*
for (let i = 1; i < 100; i++) {
    for (let numero = 0 ; numero < i; numero ++){
        if (numero % i === 0){
        } else {
            console.log(` numero !== 1`);
        }
    }
 }

function esPrimo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }
console.log(esPrimo(10));
*/
//While Loop

let valor = 1;
while (valor <=10){
  console.log( valor);
  valor ++;
}

//Do While Loop

let extra = 1;
do{
  console.log(extra);
  extra ++;
}while (extra <=10);