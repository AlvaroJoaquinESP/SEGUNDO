async function peticion() {
    let url = "https://api.giphy.com/v1/gifs/trending"
    url+= "?api_key=fAJWRf6y2IJdG2ZrcUb91bDbiUijRueB"
    console.log(url)
    const datatype= await fetch(url);
    const response= await datatype.json()
     console.log(response.data);
     let salida = ``
    for (const element of response.data) {
        salida+=`<img src='${element.images.fixed_height.url}'>`
    }

    document.querySelector('#salida').innerHTML = salida
}

peticion();