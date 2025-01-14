let table = document.createElement("table")
document.querySelector("#boton").addEventListener("click",()=> {
    // Recojo el grosor de la tabla.
    let grosorTabla = Number(document.querySelector("#grosor").value)

    // Guardo los datos de la cabecera separados en un array.
    let arrCabecera = document.querySelector('#cabecera').value.split(",")

    // Guardo cada línea de valores con split de salto de líneas.
    let arrLineas = document.querySelector('#valores').value.split("\n")


    // Creo un nuevo array en el que metemos en cada posición, un array, (array de arrays). 
    let arrValores = []

    for (const campo of arrLineas) {
        
        arrValores.push(campo.split(","))
    }
 //Llamo a la función que genera la tabla, le paso cabecerea y datos.
 generateTable(arrCabecera,arrValores, grosorTabla)
});

const generateTable = (cabecera, valores, grosor) => {
    // Borro la tabla existenente.
    //table.remove()

    // Creo una nueva tabla.
    let table = document.createElement("table")

    // Creo un nuevo tr.
    let tr = document.createElement("tr")

    // Recorro el array de datos cabecera para asignarlos a los th.
    for (const datosCabecera of cabecera) {

        let th = document.createElement("th")
        
        // Asigno el grosor del borde.
        th.style.border = `${grosor}px solid black`

        // Le asigno contenido a cada th.
        th.textContent = datosCabecera

        // Añado el th al tr.
        tr.appendChild(th)
    }

    table.appendChild(tr)


    // Recorro el array de datos de valores para asignarlos a los td.

    for (const linea of valores) {
        
        let tr = document.createElement("tr")

        for (const celda of linea) {
            let td = document.createElement("td")

            td.style.border = `${grosor}px solid black`

            td.textContent = celda

            tr.appendChild(td)
        }
        // Genero el botón en una función aparte
        deleteButton(tr)

        table.appendChild(tr)

    }

    document.body.appendChild(table)

}

const deleteButton = (tr) => {
    // Creo los elementos donde va a ir el botón.
    let tdDel = document.createElement("td")
    let buttonDel = document.createElement("button")
    // Le pongo texto/contenido al botón.
    buttonDel.textContent = "Eliminar"

    /* Añado un evento al botón para cuando se haga click se elimine 
    esa línea de la tabla*/
    buttonDel.addEventListener("click", () => {
        tr.remove()
    })

    tdDel.appendChild(buttonDel)
    tr.appendChild(tdDel)

}

