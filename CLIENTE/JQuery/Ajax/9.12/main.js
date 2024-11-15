$(document).ready(function () {
  $("#boton").click(function () {
    alert("jasdufasd");
    const obj = {
      title: $("#title").val(),
      description: $("#description").val(),
      price: Number($("#price").val()),
    };

    $.ajax({
      type: "POST",
      url: "https://dummyjson.com/products/add",
      data: obj,
      dataType: "json",
      success: function (response) {
        console.log(response);
      },
    });
  });
});
