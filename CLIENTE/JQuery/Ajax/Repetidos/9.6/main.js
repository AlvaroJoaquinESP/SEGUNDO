$(document).ready(function () {
    $("#boton").click(function () { 
       let que = $("#busqueda").val();
    $.ajax({
        type: "GET",
        url: "https://api.giphy.com/v1/gifs/search",
        data: {'api_key':"fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB",
            'q': que
        },
        dataType: "json",
        success: function (response) {
            console.log(response.data)
            salida = ``
            response.data.forEach(element => {
                salida += `<img src='${element.images.fixed_height.url}'>`
            });
            $("#salida").html(salida);
        }
    }); 
    });
});