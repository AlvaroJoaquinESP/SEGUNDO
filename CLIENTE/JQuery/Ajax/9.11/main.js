// 1.jqdocready
$(document).ready(function () {
    //2. definir un objeto con lo que voy a mandar
    $("#boton").click(function () { 
        const obj = {
            title:$("#title").val(),
            description : $("#description").val(),
            price: $("#price").val()
        }
        $("#title").val("")
        $("#description").val("")
        $("#price").val("")
        $.ajax({
            type: "POST",
            url: " https://dummyjson.com/products/add",
            data: obj,
            dataType: "json",
            success: function (response) {
                console.log(response)
            }
        });
    });
    
});