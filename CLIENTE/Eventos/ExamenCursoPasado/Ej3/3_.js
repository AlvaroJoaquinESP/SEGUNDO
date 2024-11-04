document.querySelector("#formulary").addEventListener("submit",(ev)=> {
    
    let pass1 = document.querySelector("#contrasenia1").value
    let pass2 = document.querySelector("#contrasenia2").value

    if (pass1 != pass2 || !esSegura(pass1)) {
        ev.preventDefault()    
    }

});

const esSegura = (pass) => {
    //Comprobar que tiene una minúscula, may y numero.
    return true
}