$(document).ready(function () {
    $("#boton").click(function () {
        $.ajax({
            type: "get",
            url: "http://www.omdbapi.com/",
            data:{
                "apikey":"e58057c7",
                s : $("#nombre").val()
            },
            dataType: "json",
            success: function (response) {
                console.log(response.Search)
                let salida = ``
                response.Search.forEach(element => {
                    salida += `<h1>${element.Title}</h1>
                    <img src = '${element.Poster}'>
                    <h3>${element.Year}</h3> `
                });
                $("#salida").html(salida);
            }
        });
    });
});