$(document).ready(function () {
  $.ajax({
    type: "get",
    url: "https://www.scorebat.com/video-api/v3/feed/",
    data: {
      token:
        "NTczNjRfMTY3NTk2NTE1NV9kMGY3MjUwOTY5ZTQ2NWQxMmFmZjdlOGEwMGY1YjI1MmZmNWNlNzJh",
    },
    dataType: "json",
    success: function (response) {
      console.log(response.response);
      let salida = ``
      response.response.forEach(element => {
        salida+= `<h1>${element.title}</h1>
        <h2>${element.competition}</h2>
        `
        for (const elemento of element.videos) {
            salida+=`${elemento.embed}`
        }
      });

      $("#salida").html(salida);
    },
  });
});
