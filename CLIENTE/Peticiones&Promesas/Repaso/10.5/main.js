document.querySelector("#boton").addEventListener("click", () => {
  peticion();
});

async function peticion() {
  let url = "https://api.giphy.com/v1/gifs/random?api_key=fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB"
  const datatype = await fetch(url);
  const response = await datatype.json();
  console.log(response);
  let salida = `<img src = '${response.data.images.original.url}'>`
document.querySelector('#salida').innerHTML = salida
}
