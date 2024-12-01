const opciones = ["piedra", "papel", "tijera"];
$(document).ready(function () {
  $("#boton").click(function () {
    let posicion = Math.round(Math.random() * opciones.length - 1);
    let maquina = opciones[posicion];
    let me = $("#elige").val();
    console.log(maquina);
    console.log("me"+me)
    if (me == "papel" && maquina == "tijera") {
      $("#salida").html("!!!He ganado mawquijnaa¡¡¡");

    } else if (me == "piedra" && maquina == "tijera") {
      $("#salida").html("!!!He ganado yo¡¡¡");

    } else if (me == maquina) {
      $("#salida").html("!!!Ha habido un empate¡¡¡");
    }
  });
});
