$(document).ready(function () {
    $("#boton").click(function () { 
        let titulo = $("#titulo").val();
        const obj = {
            apikey:"e58057c7",
            s:titulo
        }
        $("#titulo").val("")
        $.ajax({
            type: "GET",
            url: "http://www.omdbapi.com/",
            data: obj,
            dataType: "json",
            success: function (response) {
                // console.log(response.Search)
                let salida= ""
                //Terminar!!!!
                // response.Search.forEach(element => {
                //     salida+=`
                //     <div>
                //     <h1>Titulo : ${element.Title}</h1>
                //     <h2>Titulo : ${element.Description}</h2>
                //     <img src= ${element.description}>
                //     </div>`
                // });
            }
        });
        
    });
});