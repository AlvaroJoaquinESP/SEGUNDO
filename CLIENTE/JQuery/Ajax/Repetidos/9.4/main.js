$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://api.giphy.com/v1/gifs/trending",
        data: {
            api_key:'fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB'
        },
        dataType: "json",
        success: function (response) {
            // console.log(response.data)
            salida = ``
            for (const element of response.data) {
                salida+= `<img src='${element.images.fixed_height.url}'>`                
            }
            $("#salida").html = salida
        }
    });
});