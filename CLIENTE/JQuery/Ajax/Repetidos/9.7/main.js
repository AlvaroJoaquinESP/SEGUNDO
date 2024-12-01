$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "https://swapi.dev/api/films/",
        data: "data",
        dataType: "json",
        success: function (response) {
            console.log(response.results)
            let salida = ``
            response.results.forEach(element => {
                salida += `Id: ${element.episode_id }<br>
                Título: ${element.title }<br>
                Director: ${element.director}<br>
                Fecha de rodaje: ${element.release_date  }<hr>`
            });
            $("#salida").html(salida);
        }
    });
});