document.querySelector("#boton").addEventListener("click", () => {
  peticion();
});

async function peticion() {
  let q = document.querySelector("#book").value;
  let url = "https://www.googleapis.com/books/v1/volumes?q=" + q;
  let publicacion = Number(document.querySelector("#publicacion").value);
  const datatype = await fetch(url);
  const response = await datatype.json();
  console.log(response.items);
  let salida = ``;
  response.items.forEach((element) => {
    let fecha = element.volumeInfo.publishedDate;
    let fecha_arr = fecha.split("-");
    let anyo = fecha_arr[0];

    if (anyo >= publicacion) {
      salida += `<h2>${element.volumeInfo.title}</h2>
        <h3>${element.volumeInfo.authors}</h3>
        <h4>${element.volumeInfo.publishedDate}</h4>
        <img src = '${element.volumeInfo.imageLinks.thumbnail}'        
        <a> href = '${element.volumeInfo.infoLink}'</a>
        `;
    }
  });

  document.querySelector("#salida").innerHTML = salida;
}
