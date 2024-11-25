document.querySelector("#boton").addEventListener("click",()=> {
    let cantidad = document.querySelector("#cantidad").value
    let numMaq = Math.round(Math.random() * 6)
    document.querySelector("#cantidadMaquina").value = numMaq

    sumaTotal = cantidad + numMaq
    let selector = document.querySelector("#selector").value
    let resultadoDiv = document.querySelector("#ganador")

    if ((selector == "pares") && (sumaTotal % 2 == 0) || (selector == "nones") && (sumaTotal % 2 != 0)) {
        resultadoDiv.className = "ganaPlayer"
        resultadoDiv.innerHTML = "Has ganado"
    } else {
        resultadoDiv.className = "ganaMaquina"
        resultadoDiv.innerHTML = "Has perdido"
    }
});