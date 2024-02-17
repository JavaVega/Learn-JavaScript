//Creando un reproductor 

const reproductor	= {
    reproducir : function(id){
        console.log(`La cancion comenzo a reproducirse: ${id}`);
    },
    pausar: function(cancion){
        console.log(`${cancion} se ha pausado....`);
    },
    siguiente : function(cancion){
        console.log(`La siguiente cancion que continua es: ${cancion}`);
    },
    finalizar : function (cancion){
        console.log(`${cancion} Se finalizo`)
    }
}
reproductor.reproducir(3450);
reproductor.pausar("Mis ojos lloran por tí");
reproductor.siguiente("Mis ojos lloran por tí");
reproductor.finalizar("Mis ojos lloran por tí");