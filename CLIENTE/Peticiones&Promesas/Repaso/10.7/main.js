async function peticion() {
    let url = "https://pixabay.com/api/?key=20446055-86e5aac963e9ed03555d0f343"
    const datatype= await fetch(url);
    const response= await datatype.json()
     console.log(response.hits);
    // lo de siempre
}

peticion();
