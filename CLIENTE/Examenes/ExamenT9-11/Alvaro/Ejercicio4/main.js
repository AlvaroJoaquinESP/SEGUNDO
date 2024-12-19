const peticion = async () => {
  let url =
    "https://api.rawg.io/api/games?key=2f4e8a1147e74fc1901bc08e5806c6d6";

  const datatype = await fetch(url);
  const response = await datatype.json();
  console.log(response.results);
  let salida = ``;
  response.results.forEach((element) => {
    salida += `Nombre: ${element.name}<br>
        Fecha de lanzamiento: ${element.released}<br>
        Fondo del juego:<img src = '${element.background_image}'><br>
        Calificación: ${element.rating}<br>`;

    for (const elemento of element.ratings) {
      salida += `¿Vale la pena?: ${elemento.title}<br>
            Porcentaje: ${elemento.percent}<hr>`;
    }
    salida += `Puntuación: ${element.metacritic}<br>`;

    element.platforms.forEach((elementos) => {
      salida += `Plataforma: ${elementos.platform.name}<br>
        Imagen de fondo de ${elementos.platform.name}: <img src = '${elementos.platform.image_background}'><hr>`;
    });
  });
  document.querySelector("#salida").innerHTML = salida;
};

peticion();
