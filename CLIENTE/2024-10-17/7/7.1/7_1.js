const comprobarPar = (num) => {
    num = Number(document.getElementById("numero").value)
    if (num % 2 == 0) {
        alert("Es par")
    }
}

const comprobarImpar = (num) => {
    num = Number(document.getElementById("numero").value)
    if (num % 2 != 0) {
        alert("Es impar")
    }
}