document.querySelector("#boton").addEventListener("click", () => {
  async function peticion() {
    let tema = document.querySelector("#tema").value;
    let url =
      "https://api.giphy.com/v1/gifs/search?api_key=fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB&q=" +
      tema;
      console.log(url)
    const datatype = await fetch(url);
    const response = await datatype.json();
    console.log(response);
    let salida = ``
    for (const element of response.data) {
        salida += `<img src ='${element.images.fixed_height.url}'>`
    }
    document.querySelector('#salida').innerHTML = salida
  }

  peticion();
});
