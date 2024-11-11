$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://api.giphy.com/v1/gifs/trending",
        // Tengo que mandar datos, por ello cambio data.
        data: {
            api_key: "fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB"
        },
        dataType: "json",
        success: function (response) {
            let salida = ""
            for (const element of response.data) {
                salida += `<div><img src ="${element.images.fixed_height.url}"></div>`
            }

            $("#resultado").html(salida)
        }
    });
});