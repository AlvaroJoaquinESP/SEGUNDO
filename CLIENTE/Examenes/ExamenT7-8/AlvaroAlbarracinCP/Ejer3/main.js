const especiales = [".", "-", "&", "*", "$"]
document.querySelector("#formulary").addEventListener("submit",(ev)=> {
    let pass = document.querySelector("#password").value
    if (!esSegura(pass)) {
        alert("Credenciales incorrectas")
        ev.preventDefault()
    }

});


const esSegura = (pass)  => {
    // No recuerdo el método split
    const may = /[A-Z]/.test(pass)
    const min = /[a-z]/.test(pass)
    const num = /[0-9]/.test(pass)
    return may && min && num
}