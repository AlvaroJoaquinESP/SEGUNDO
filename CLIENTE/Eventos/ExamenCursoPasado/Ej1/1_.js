const suscriptions = []

document.querySelector("#boton").addEventListener("click",()=> {
    const obj = {
        idPlataforma : Number(document.querySelector("#idPlataforma").value),
        idPlataforma : document.querySelector("#plataforma").value,
        idPlataforma : document.querySelector("#tiempo").value,
        idPlataforma : Number(document.querySelector("#precio").value),
        idPlataforma : document.querySelector("#idPlataforma").value
    }
    
    suscriptions.push(obj)

    mostrarSuscripciones()

});