const bodega = [];

const insertarVIno = () => {
  // alert("asdf")
  let nombreVino = document.querySelector("#nombreVino").value;
  let pvpVino = Number(document.querySelector("#pvpVino").value);

  vino = {
    nombre: nombreVino, // PUEDO PONER DIRECTAMENTE document.querySelector("#nombreVino").value;
    pvp: pvpVino,
  };

  bodega.push(vino);
  mostrarVino();

  document.querySelector("#nombreVino").value = "";
  document.querySelector("#pvpVino").value = "";
};

const mostrarVino = () => {
  let salida = "";
  bodega.forEach((element) => {
      salida += `<div>
      <h1>${element.nombre}</h1>
      <img src="vino.jpg">
      <h3>${element.pvp}</h3> </div>` ;
  });

  document.querySelector("#contenedor").innerHTML = salida;
};
