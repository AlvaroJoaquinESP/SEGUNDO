$(document).ready(function () {
    $("#boton").click(function () {
        const obj = {
            title : $("#title").val()
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