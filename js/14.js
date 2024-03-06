/*
const botton = document.querySelector("#button")

botton.addEventListener("click", function(){
    Notification.requestPermission()
    .then(resultado => console.log(`El resultado es ${resultado}`));
});
*/

function descargarNuevosUsuarios(){
    return new Promise (resolve =>{
        console.log("Los nuevos usuarios se estan descargando......")
        setTimeout(() => {
            console.log("Los nuevos usuarios se han descargado exitosamente");
        }, 5000);
    });
}

function descargarNuevosPedidos(){
    return new Promise (resolve =>{
        console.log("Los nuevos pedidos se estan descargando......")
        setTimeout(() => {
            console.log("Los nuevos pedidos se han descargado exitosamente");
        }, 3000);
    });
}

async function app(){
    try {
        const resultado = await Promise.all([descargarNuevosUsuarios(), descargarNuevosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();
console.log("Mientras carga")