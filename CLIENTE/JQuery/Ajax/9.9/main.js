$(document).ready(function () {
    
    $("#boton").click(function () { 
        
        //catura el calor del input
        let pelicula = $("#numero").val()
        let urldefinitiva = "https://swapi.dev/api/films/numero" + pelicula
    });
});