document.querySelector("#boton").addEventListener("click", () => {
  peticion();
});

async function peticion() {
  let term = document.querySelector("#term").value;
  let url = "https://api.github.com/search/repositories?q=" + term;
  const datatype = await fetch(url);
  const response = await datatype.json();
  console.log(response);
}


