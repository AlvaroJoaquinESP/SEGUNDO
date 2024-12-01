$(document).ready(function () {
  $("#boton").click(function () {
    let episode_id = Number($("#episode_id").val());
    let url = "https://swapi.dev/api/films/" + episode_id;
    $.ajax({
      type: "GET",
      url: url,
      data: "data",
      dataType: "json",
      success: function (response) {
        console.log(response);
        let salida = `<h1>${response.title}</h1>
                    <h2>${response.episode_id}</h2>
                    <h4>${response.characters}</h4>`;
        $("#salida").html(salida);
      },
    });
  });
});
