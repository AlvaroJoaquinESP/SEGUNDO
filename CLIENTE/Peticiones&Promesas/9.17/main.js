document.querySelector("#boton").addEventListener("click", function () {
  peticion();
});
async function peticion() {
  let categoria = document.querySelector("#categoria").value;
  let url = "https://newsapi.org/v2/top-headlines";
  url += "?apiKey=3b559c9fcd0d4cd38f916a08bb12c8df";
  url += "&category=" + categoria;

  const datatype = await fetch(url);
  const response = await datatype.json();
  console.log(response);
  salida = ``

  response.articles.forEach(element => {
    salida+= `<h1>Titulo: ${element.title}</h1>
    <h2>Autor: ${element.author}</h2>
    <h4>Medio: ${element.source.name}</h4>
    <p>Descripcion: ${element.description}</p>
    <img src = '${element.urlToImage}'>
    <a href = '${element.url}'>Url: </a>
    `
  });

  document.querySelector("#salida").innerHTML = salida
}

