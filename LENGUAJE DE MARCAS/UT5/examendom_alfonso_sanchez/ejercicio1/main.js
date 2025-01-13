let tabla = document.createElement("table");
document.querySelector("#boton").addEventListener("click", () => {

    //Se guarda el grosor de la tabla
    let grosorTabla = Number(document.querySelector("#grosor").value);

    //Se guardan los datos de cabecera separados en un array
    let arrCabecera = document.querySelector("#cabecera").value.split(",");

    //Guardamos cada linea con un split que separa por lineas (\n)
    let arrLineas = document.querySelector("#valores").value.split("\n");

    //Se crea un nuevo array en el que vamos a meter en cada posicion un array
    //con los valores de cada fila
    let arrValores = [];

    for (let campo of arrLineas) {

        arrValores.push(campo.split(","));

    }
    //Llamamos a una funcion que genera la tabla pasandole la cabecera y los datos
    generarTabla(arrCabecera, arrValores, grosorTabla);

});


const generarTabla = (cabecera, valores, grosor) => {
    //Se borra la tabla previamente existente
    tabla.remove();

    //Se crea el nuevo elemento tabla con sus table y su tr con th
    tabla = document.createElement("table");

    let tr = document.createElement("tr");

    //Se recorre el array de datos para asignarlos a los th
    for (let datoCabecera of cabecera) {

        let th = document.createElement("th");

        th.style.border = `${grosor}px solid black`;

        th.textContent = datoCabecera;

        tr.appendChild(th);

    }

    tabla.appendChild(tr);

    //Se recorren los datos de la tabla para asignarlos a sus correspondientes td

    for (let linea of valores) {

        tr = document.createElement("tr")

        for (let campo of linea) {

            let td = document.createElement("td");
            td.style.border = `${grosor}px solid black`;

            td.textContent = campo;

            tr.appendChild(td);
        }
        //Se genera el boton en una funcion aparte
        botonEliminar(tr);

        tabla.appendChild(tr);

    }

    document.body.appendChild(tabla)

}

const botonEliminar = (tr) => {
    //Se crean los elementos
    let tdDel = document.createElement("td");
    let botonDel = document.createElement("button")
    botonDel.textContent = "Eliminar";

    //Se le añade un evento al boton que hace que cuando se haga click se
    //eliminará la linea de la tabla
    botonDel.addEventListener("click", () => {

        tr.remove();

    })

    tdDel.appendChild(botonDel);
    tr.appendChild(tdDel);

}