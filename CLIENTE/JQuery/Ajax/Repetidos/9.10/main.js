$(document).ready(function () {
    $("#boton").click(function () {
        const obj = {
            name : $("#name").val(),
            job : $("#job").val()
        }
        $.ajax({
            type: "POST",
            url: "https://reqres.in/api/users",
            data: obj,
            dataType: "json",
            success: function (response) {
                console.log(response)
            }
        });
    });
});