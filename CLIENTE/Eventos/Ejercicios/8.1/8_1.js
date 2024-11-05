document.querySelector("#boton").addEventListener("click", (ev) => {
  // alert("sdASD")
  let numeroSerie = document.querySelector("#serie").value;
  const div = numeroSerie.split("");
  document.write(div);
  if (
    isNaN(div[0]) &&
    isNaN(div[1]) &&
    isNaN(div[2]) &&
    !isNaN(div[3]) &&
    !isNaN(div[4]) &&
    (div[5] == 1 || div[5] == 2)
  ) {
    
  } else {
    ev.preventDefault();
    alert("Error en el número de serie");
  }
});
