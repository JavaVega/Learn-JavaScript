function verJson (){
    const paises = "countries.json";
    fetch(paises)
        .then(resolve => {
            return resolve.json();
        })
        .then(datos => {
            const { paises} = datos;
            paises.forEach(informacion => {
                console.table(informacion);
            });
        })
}

verJson();