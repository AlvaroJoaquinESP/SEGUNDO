async function peticion() {
  let url =
    "https://api.rawg.io/api/games?key=2f4e8a1147e74fc1901bc08e5806c6d6";
  const datatype = await fetch(url);
  const response = await datatype.json();
  let salida = ``;
  console.log(response.results);
  for (const element of response.results) {
    salida += `Nombre: ${element.name}<br>
        Fecha de lanzamiento: ${element.released}<br>
        <img src = '${element.background_image}'><br>
        Calificación:  ${element.rating}<br>`;
    element.ratings.forEach((elemento) => {
      salida += `Titulo: ${elemento.title}<br>
            Porcentaje: ${elemento.percent}<br>`;
    });
    salida += `Puntuación en metacritic: ${element.metacritic}<br>`;

    for (const elementos of element.platforms) {
        salida += `Nombre: ${elementos.platform.name}<br>
        <img src = '${elementos.platform.image_background}'><br>`;
    }
    
  }
  document.querySelector("#salida").innerHTML = salida;
}

peticion();
