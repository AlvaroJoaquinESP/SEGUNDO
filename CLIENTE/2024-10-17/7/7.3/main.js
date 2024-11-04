const reverso = () => {
    // Es recomendable ponerle el mismo nombre que el id del html.
    let datos = document.getElementById("datos").value
    // Lo paso a array
    let arrDatos = datos.split("")
    arrDatos.reverse()
    // Lo paso a String
    let salida = arrDatos.join("")
    // Cojo el valor del campo resultado y lo marchaco con la variable salida.
    document.getElementById("resultado").value = salida
    // Cuando me salga el resultado, borro el que he metido, (lo marchaco).
    document.getElementById("datos").value=""
}