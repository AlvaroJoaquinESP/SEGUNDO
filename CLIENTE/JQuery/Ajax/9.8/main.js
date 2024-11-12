$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://swapi.dev/api/films/",
        data: "data",
        dataType: "json",
        success: function (response) {
            // console.log(response.results)
            let salida = ""
            response.results.forEach(element => {
                if (element) {
                    
                }
                salida += `<ul>
                <li>${element.episode_id}</li>                
                <li>${element.title}</li>                
                <li>${element.director}</li>                
                <li>${element.release_date}</li>
                </ul>
                <hr>`                
            });

            $("#resultado").html(salida)
        }
    });
});