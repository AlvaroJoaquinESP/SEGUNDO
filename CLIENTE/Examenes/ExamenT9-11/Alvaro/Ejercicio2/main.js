const peticion = async () =>  {
  let url = "https://api.imgflip.com/get_memes";
  const datatype = await fetch(url);
  const response = await datatype.json();
  // console.log(response.data.memes);

  let salida = ``;
  response.data.memes.forEach((element) => {
    salida += `<h2>${element.name}</h2>
    <img src = '${element.url}'><hr>`;
  });

  document.querySelector("#salida").innerHTML = salida
}

peticion();
