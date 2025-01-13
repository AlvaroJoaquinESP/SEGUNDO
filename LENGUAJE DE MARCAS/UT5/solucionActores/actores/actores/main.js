document.querySelector("#boton").addEventListener("click",()=> {
    insertarActor();
});
 
document.querySelector("#generar").addEventListener("click",()=> {
    generarXMLdesdeTabla();
});

document.addEventListener("DOMContentLoaded", () => {
    mostrarTabla();
});






function insertarActor (){

    //Se recuperan los valores de los inputs
    const nombre = document.querySelector("#nombre").value;
    const apellidos = document.querySelector("#apellidos").value;
    const genero = document.querySelector("input[name='genero']:checked").value;
    const edad = document.querySelector("#edad").value;
    const pelicula = document.querySelector("#pelicula").value;

    const data = [nombre, apellidos, genero, edad, pelicula];

    //Se crea una fila y se crean las celdas con el valor del input recuperado
    const table = document.querySelector("table");
    const tr = document.createElement("tr");
    table.appendChild(tr);

    for (const i in data) {
        const td = document.createElement("td")
        td.textContent = data[i];
        tr.appendChild(td);
    }

}










function generarXMLdesdeTabla () {

    //Se recorre la tabla HTML y crea un documento xml donde se crean los elementos del xml
    const xml = new DOMParser().parseFromString(`<?xml version="1.0" encoding="UTF-8"?><actors></actors>`,"text/xml");
    const actors = xml.querySelector("actors");    
    const filas = document.querySelectorAll("#salida table tr");

    //Empiezo en 1, por en la pos 0 esta la cabecera de la tabla
    for (let i = 1; i < filas.length; i++) {
            const actorNode = xml.createElement("actor");
            const nombre = xml.createElement("nombre");
            const apellido = xml.createElement("apellido");
            const genero = xml.createElement("genero");
            const edad = xml.createElement("edad");
            const pelicula = xml.createElement("pelicula");

            nombre.textContent = filas[i].cells[0].textContent;
            apellido.textContent = filas[i].cells[1].textContent;
            genero.textContent = filas[i].cells[2].textContent;
            edad.textContent = filas[i].cells[3].textContent;
            pelicula.textContent = filas[i].cells[4].textContent;

            actorNode.appendChild(nombre);
            actorNode.appendChild(apellido);
            actorNode.appendChild(genero);
            actorNode.appendChild(edad);
            actorNode.appendChild(pelicula);
            actors.appendChild(actorNode);
    }

    //Para descargar el xml generado desde el navegador
    const xmlString = new XMLSerializer().serializeToString(xml);
    const blob = new Blob([xmlString], { type: "text/xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "actors.xml";
    link.click();
}








function mostrarTabla () {
    //Se crea la tabla y la cabera por JS
    const tabla = document.createElement("table");
    const tr = document.createElement("tr");
    let arrCampos = ["nombre", "apellidos", "genero", "edad", "pelicula"];
    for (let campo of arrCampos) {
        let th = document.createElement("th");
        th.textContent = campo;
        tr.appendChild(th);
    }

    tabla.appendChild(tr);
    document.querySelector("#salida").appendChild(tabla);
}