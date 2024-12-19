document.querySelector("#boton").addEventListener("click", () => {
  let entrada = document.querySelector("#entrada").value;
  document.querySelector("#entrada").value = "";
  if (entrada.length > 0) {
    // Obtengo el contenido interno del elemento con id = salida
    let salida = document.querySelector("#salida").innerHTML;
    // Recojo en salida el texto que ha introducido el usuario
    salida += `<h5>${entrada}</h5>`;
    
    document.querySelector("#salida").innerHTML = salida;
    setTimeout(respuesta,1500)
  }
});

const respuesta = () => {
     // Genero la posicion de la respuesta de chatGPT aleatoria
     let posicion = Math.round(Math.random() * respuestasChatGPT.length - 1);
     let salida = document.querySelector('#salida').innerHTML
     // Añado la respuesta a la salida
     salida += `<p>${respuestasChatGPT[posicion]}</p>`;
     document.querySelector("#salida").innerHTML = salida;
    }