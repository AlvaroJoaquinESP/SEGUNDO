let videogames = [];

const rellenaVideojuegos = async () => {

    let url = "https://nuevo-f8fb3-default-rtdb.firebaseio.com/";
    const datatype = await fetch(url);
    const response = await datatype.json();
    console.log(response);
    let salida = ``
    videogames.forEach(element => {
        salida += `Titulo: ${element.titulo}<br>
        Plataforma:${element.plataforma}<br>
        Genero:${element.genero}<br>
        Popularidad:${element.popularidad}<hr>`
    });

    document.querySelector('#salida').innerHTML = salida
};
