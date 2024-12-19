const condicion = ["soleado", "nublado", "lluvioso", "tormenta"];
document.querySelector("#boton").addEventListener("click", () => {
  simularClima();
});

const simularClima = () => {
  let nombre = document.querySelector("#nombre").value;
  let salida = document.querySelector("#salida").innerHTML;
  salida += `Ciudad: ${nombre} <br>`;
  let temperatura = Math.round(Math.random() * 50 - 10);
  salida += `Temperatura: ${temperatura} <br>`;
  let posicion = condicion[Math.round(Math.random() * condicion.length)];

  if (posicion == condicion[0]) {
    salida += frasesSoleado[Math.round(Math.random() * frasesSoleado.length)];
  } else if (posicion == condicion[1]) {
    salida += frasesSoleado[Math.round(Math.random() * frasesNublado.length)];
  } else if (posicion == condicion[2]) {
    salida += frasesSoleado[Math.round(Math.random() * frasesLluvioso.length)];
  } else if (posicion == condicion[3]) {
    salida += frasesSoleado[Math.round(Math.random() * frasesTormenta.length)];
  }

  document.querySelector('#salida').innerHTML = salida
};
