comprobarPar = () => {
    if (Number(document.querySelector("#campo").value) % 2 == 0) {
        alert("Es par")
    }
}
comprobarImpar = () => {
    if (Number(document.querySelector("#campo").value) % 2 != 0) {
        alert("Es impar")
    }
}