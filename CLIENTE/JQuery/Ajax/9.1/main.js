$(document).ready(function () {
const lineaFactura = [];
    $("#boton").click(function () {
    const producto = {
      producto: $("#producto").val(),
      cantidad: Number($("#cantidad").val()),
      pvp: Number($("#pvp").val()),
    };
    lineaFactura.push(producto);
    
console.log(lineaFactura);
  });
});

