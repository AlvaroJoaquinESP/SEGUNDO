let videojuegos = [];
document.querySelector("#boton").addEventListener("click", function () {
  insertaVideojuego();
});

const insertaVideojuego = async () => {
  const obj = {
    titulo: document.querySelector("#titulo").value,
    plataforma: document.querySelector("#plataforma").value,
    genero: document.querySelector("#genero").value,
    popularidad: document.querySelector("#popularidad").value,
  };
  videojuegos.push(obj);

  let url = "https://nuevo-f8fb3-default-rtdb.firebaseio.com/";
  const datatype = await fetch(url, {
    method: "put",
    body: JSON.stringify(videojuegos),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await datatype.json();
  console.log(response);
};
