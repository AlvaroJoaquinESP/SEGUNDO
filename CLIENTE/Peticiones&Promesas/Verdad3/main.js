document.querySelector("#boton").addEventListener("click",function() {
    
    
    peticion();

});

async function peticion() {
    let url = "https://fakerapi.it/en?_quantity=10"

    const datatype= await fetch(url);
    const response= await datatype.json()
     console.log(response);
     let salida= ``
     response.data.forEach(element => {
         salida+=`<table>
         <p>Nombre: ${element.firstname + " " + element.lastname}</p>
         <p>Correo: ${element.email}</p>
         <p>Telefono: No hay</p>
         <p>Direccion: ${element.macAdress}</p>
         `
     });
     salida+=`</table>`

}