document.querySelector("#boton").addEventListener("click",() => {
    addTable()
    addList()
    clean()
});


const addTable = () => {
    // Recojo los valores.
    const name = document.querySelector("#name").value
    const victory = document.querySelector("#victory").value

    /* Recojo la tabla, ya que con querySelector puedo recoger o por id
    o por elemento*/

    const table = document.querySelector("table")
    const tr = document.createElement("tr")
    table.appendChild(tr) // Lo añado a la tabla.

    // Creo los elementos que van a ir dentro del tr.
    const nombreTd = document.createElement("td")
    nombreTd.textContent = name
    tr.appendChild(nombreTd)

    const victoriasTd = document.createElement("td")
    victoriasTd.textContent = victory
    tr.appendChild(victoriasTd)
}

const addList = () => {
    // Recojo los valores.
    const name = document.querySelector("#name").value
    const victory = document.querySelector("#victory").value

    // Recojo la lista por elemento.
    const ul = document.querySelector("ul")
    // Creo los elementos dentro de la lista.
    const li = document.createElement("li")
    // Asigno valor a ese elemento.
    li.textContent = name + " - " + victory
    // Añado ese elemento a la lista. 
    ul.appendChild(li)
}

const clean = () => {
    // Limpio los campos para insertar nuevos.
    document.querySelector("#name").value = ""
    document.querySelector("#victory").value = ""
}