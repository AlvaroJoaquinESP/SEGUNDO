document.querySelector("#boton").addEventListener("click",function() {
    let numero = document.querySelector("#episode_id").value
    let url = "https://swapi.dev/api/films/" + numero
    async function peticion() {
        const datatype= await fetch(url);
        const response= await datatype.json()
         console.log(response);
        let salida = `Titulo: ${response.title}<br>
        ID: ${response.episode_id}<br>`
        response.characters.forEach(element => {
            salida+= `Personajes: ${element}<br>`
        });
        
    document.querySelector("#salida").innerHTML = salida
    }
    
    peticion();

});