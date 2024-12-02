document.querySelector("#boton").addEventListener("click",()=> {
    
    
    peticion();
});

async function peticion() {
    let url = "https://reqres.in/api/users"
    const datatype= await fetch(url, {
    method:'POST',
    body: datosJSON,
    headers: {
        'Content-Type':'application/json'
    }
    });
    const response= await datatype.json()
     console.log(response);
}