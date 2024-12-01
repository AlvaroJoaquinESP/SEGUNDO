$(document).ready(function () {
    $("#boton1").click(function () { 
        let dolar = $(selector).val();
        $.ajax({
            type: "get",
            url: "https://api.exchangerate-api.com/v4/latest/USD",
            data: "data",
            dataType: "json",
            success: function (response) {
                console.log(response.rates.EUR)
                dolar = 

            }
        });
    });
});