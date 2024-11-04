document.querySelector("#boton").addEventListener("click",()=> {
    let name = document.querySelector("#nombre").value
    let surname = document.querySelector("#apellido").value

    let element = document.querySelector("#over")

    element.innerHTML = (`Hola ${name}  ${surname}, gracias por rellenar el formulario.`) 
});