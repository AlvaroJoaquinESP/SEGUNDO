$(document).ready(function () {
    
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: "data",
        dataType: "json",
        success: function (response) {
            console.log(response)// Para ver que me ha devuelto la página.
        }
    });


});