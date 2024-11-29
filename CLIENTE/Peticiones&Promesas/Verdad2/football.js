document.querySelector("#boton").addEventListener("click",function() {
    let url = "https://www.football-data.org/documentation/quickstart"

    
    
    peticion();

});

async function peticion() {
    const datatype= await fetch(url);
    const response= await datatype.json()
    console.log(response);
   
}