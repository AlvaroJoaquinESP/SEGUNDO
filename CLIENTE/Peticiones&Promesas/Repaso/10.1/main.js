async function peticion() {
    let url = "https://swapi.dev/api/films/"

    const datatype= await fetch(url);
    const response= await datatype.json()
     console.log(response.results);
    let salida = ``
     response.results.forEach(element => {
        salida += `ID: ${element.episode_id}<br>
        Titulo: ${element.title }<br>
        Director : ${element.director }<br>
        Fecha de rodaje: ${element.release_date }<hr>`
    });
    document.querySelector("#salida").innerHTML = salida
}

peticion();