$(document).ready(function () {
    $("#boton").click(function () { 
        $.ajax({
            type: "GET",
            url: "https://api.giphy.com/v1/gifs/random",
            data: {
                api_key:'fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB'
            },
            dataType: "json",
            success: function (response) {
                // console.log(response.data.images.original.url)
                let salida = `<img src='${response.data.images.original.url}'>`
                $("#salida").html(salida);
            }
        });
    });
    
});