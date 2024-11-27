async function peticion() {
    let url = " https://www.scorebat.com/video-api/v3/feed/"
    url+="?token=NTczNjRfMTY3NTk2NTE1NV9kMGY3MjUwOTY5ZTQ2NWQxMmFmZjdlOGEwMGY1YjI1MmZmNWNlNzJh"

    const datatype= await fetch(url);
    const response= await datatype.json()
    //  console.log(response.response);
    
     let salida = ``
     response.response.forEach(element => {
        salida+=`<h1>${element.title}</h1>
        <h2>${element.competition}</h2>
        `
        for (const elemento of element.videos) {
            salida+=`${elemento.embed}<br>`
        }
     });

     document.querySelector("#partidos").innerHTML = salida
}

peticion();