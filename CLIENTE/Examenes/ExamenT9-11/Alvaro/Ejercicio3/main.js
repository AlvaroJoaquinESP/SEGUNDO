document.querySelector("#boton").addEventListener("click", function () {
  peticion();
});

const peticion = async () => {
  let book = document.querySelector("#book").value;
  let filtro = Number(document.querySelector("#filtro").value);

  let url = "https://www.googleapis.com/books/v1/volumes?q=" + book

  const datatype = await fetch(url);
  const response = await datatype.json();
  console.log(response.items);

  let salida = ``;
  for (const element of response.items) {
    if (filtro > Number(element.volumeInfo.publishedDate)) {
    }

      salida += `<h2>${element.volumeInfo.title}</h2>
   <h3>${element.volumeInfo.authors}</h3>
   <h4>${element.volumeInfo.publishedDate}</h4>
   <img src = '${element.volumeInfo.imageLinks.thumbnail}'>
   <a href = '${element.volumeInfo.infoLink}'>Información</a>`;
    }
  
  document.querySelector("#salida").innerHTML = salida;
};
