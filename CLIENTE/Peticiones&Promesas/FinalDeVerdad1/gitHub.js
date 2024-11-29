document.querySelector("#boton").addEventListener("click", function () {
  let termino = document.querySelector("#termino").value;
  let url = "https://api.github.com/search/repositories?q=" + termino;

  fetch(url)
    .then((datatype) => datatype.json())
    .then((response) => {
      console.log(response);
      let salida = ``;
      response.items.forEach((element) => {
        salida += `<h2>Nombre: ${element.name}</h2>
                <p>Descripción: ${element.description}</p>
                <h3>Número de estrellas: ${element.stargazers_count}</h3>
                <a> Enlace al repositorio: ${element.html_url}</a>`;
      });
      document.querySelector("#salida").innerHTML = salida
    });
});
