$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/ditto",
        data: "data",
        dataType: "json",
        success: function (response) {
            console.log(response) // para ver que me devuelve
        }
    });
});