let table = document.createElement("table")

document.querySelector("#boton").addEventListener("click",() => {
    
    // Se recoje el grosor de la tabla.
    let grosorTabla = document.querySelector("#grosor").value

    // Se recoje la cabecera en un array y se parte.
    let cabeceraArr = document.querySelector("#cabecera").value.split(",")

// Se recojen los valores en un array y se parte por salto de línea.
let valoresArr = document.querySelector("#valores").value.split("\n")


});


const generacionTabla = (cabecera, valores, grosor) => {
    // Se elimina la tabla existente.
    table.remove()

    


}