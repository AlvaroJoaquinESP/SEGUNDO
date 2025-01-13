let tabla = document.createElement("table");
let buttonExport = document.createElement("button");
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
    //Se inserta la tabla y el boton para exportar en XML
    document.body.appendChild(tabla)
    botonExportar();

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

const botonExportar = () => {

    //Se elimina el boton ya existente para que no se duplique
    //al generar multiples veces
    buttonExport.remove();

    //Se crea un nuevo boton
    buttonExport = document.createElement("button")

    buttonExport.textContent = "Exportar datos"

    //Se crea un evento para ese boton que convierta en XML el contenido de la tabla
    buttonExport.addEventListener("click", () => {
        
        //Se crea el objeto de XML
        const xml = new DOMParser().parseFromString('<?xml version="1.0" encoding="UTF-8"?><root></root>', "text/xml");

        //Se crea el documento XML para poder crear elementos en el
        let doc = xml.documentElement;

        let datosTabla = document.querySelectorAll("table tr")
        //Creamos un contador de IDs, que será utilizado para asignar
        //el atributo ID del XML
        let contID = 0;

        //Metemos en un array el nombre de los campos de la cabecera para
        //utilizarlos posteriormente al crear cada campo data
        let arrCabeceraTabla = [];

        for (let campo of datosTabla[0].cells) {

            arrCabeceraTabla.push(campo.textContent);

        }


        //Recorremos cada linea de la tabla
        for (let linea of datosTabla) {

            //Comprobamos que el ID no sea 0, ya que significará que estamos recorriendo
            //la linea de la cabecera y esta no queremos mostrarla como un campo data
            if (contID > 0) {

                //Creamos un contador de celdas porque tambien hay que tener en cuenta
                //que uno de los camposde cada fila es el boton de eliminar y tampoco
                //queremos mandarlo al XML
                let contCells = 0;

                //Se crea el elemento data y se le asigna el ID correspondiente como atributo
                let dataXML = xml.createElement("data");
                dataXML.setAttribute("id", contID)

                
                //Se recorren las celdas de cada linea
                for (let campo of linea.cells) {

                    //Comprobamos que el contador de celdas sea menor que la cantidad de celdas
                    //que hay en la cabecera ya que si es mayor es porque estamos recorriendo
                    //la celda del boton eliminar
                    if (contCells < arrCabeceraTabla.length) {

                        
                        //creamos un elemento con el nombre del campo correspondiente de la cabecera
                        let campoXML = xml.createElement(arrCabeceraTabla[contCells]);

                        //Asignamos el valor del campo de XML con el valor del campo de la tabla
                        campoXML.textContent = campo.textContent;

                        dataXML.appendChild(campoXML);

                        contCells++;
                    }
                }

                xml.querySelector("root").appendChild(dataXML);

            }
        
            contID++;

        }

        //Descarda del fichero XML
        const xmlString = new XMLSerializer().serializeToString(xml);
        const blob = new Blob([xmlString], {type: "text/xml"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "data.xml";
        link.click();

        

    })

    document.body.appendChild(buttonExport)

}