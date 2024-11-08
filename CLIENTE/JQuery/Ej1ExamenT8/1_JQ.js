const suscriptions = [];

$().ready(function () {
  $("#boton").click(function () {
    const obj = {
        idPlataforma: Number($("#idPlataforma").val()),
        plataforma: $("#plataforma").val(),
        tiempo: $("#tiempo").val(),
        precio: Number($("#precio").val()),
        enlace: $("#idPlataforma").val(),
      };

      suscriptions.push(obj)

      mostrarSuscripciones()
  });




});

const mostrarSuscripciones = () => {
  let salida = "";
  suscriptions.forEach((element) => {
    salida += `<table>
      <tr> 
          <th>Id Plataforma</th>
          <th>Plataforma</th>
          <th>Tiempo</th>
          <th>Precio</th>
          <th>Enlace</th>
          <th>¿Eliminar?</th>
      </tr> 
      
      <tr> 
          <td>${element.idPlataforma}</td>
          <td>${element.plataforma}</td>
          <td>${element.tiempo}</td>
          <td>${element.precio}</td>
          <td>${element.enlace}</td>
          <td><button onclick="deleteSuscription(${element.idPlataforma})">Eliminar</button></td>
      </tr> 
      
      </table>`;
  });
  $("#tabla").html(salida);
};

const deleteSuscription = (idPlataforma) => {
  for (let element of suscriptions) {
    if (idPlataforma == element.idPlataforma) {
      suscriptions.splice(suscriptions.indexOf(element), 1);
    }
  }
  mostrarSuscripciones();
};
