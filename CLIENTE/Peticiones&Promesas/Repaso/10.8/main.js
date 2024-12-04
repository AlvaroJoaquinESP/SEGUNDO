document.querySelector("#boton").addEventListener("click",()=> {
    
    
    peticion();
});


async function peticion() {
    const obj = {
        name : document.querySelector('#name').value,
        job : document.querySelector('#job').value,
        name : document.querySelector("#name").value,
        job : document.querySelector("#job").value
    }
    let url = "https://reqres.in/api/users"
    const datatype= await fetch(url, {
    method:'POST',
    body: JSON.stringify(obj),
    headers: {
        'Content-Type':'application/json'
    }
    });
    const response= await datatype.json()
     console.log(response);
}