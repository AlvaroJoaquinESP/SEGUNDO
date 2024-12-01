$(document).ready(function () {
    $("#boton").click(function () { 
        const obj = {
            title : $("#title").val(),
            description : $("#description").val(),
            prize : Number($("#prize").val())
        }
        $.ajax({
            type: "post",
            url: "https://dummyjson.com/products/add",
            data: obj,
            dataType: "json",
            success: function (response) {
                console.log(response)
            }
        });
        
    });
});