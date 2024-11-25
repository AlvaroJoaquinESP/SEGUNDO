const suscripciones = []
document.querySelector("#boton").addEventListener("click",()=> {
    const suscripcion = {
        idPlataforma : document.querySelector("#idPlataforma").value,
        Plataforma : document.querySelector("#plataforma").value,
        Tiempo : document.querySelector("#tiempo").value,
        Precio : document.querySelector("#precio").value,
        Enlace : document.querySelector("#enlace").value
    }
    suscripciones.push(suscripcion)
    mostrarSuscripciones()

});

const mostrarSuscripciones = () => {
    let salida = ``
    suscripciones.forEach(element => {
        salida+= `<table border = 1>
        
            <tr>
                <th>ID Plataforma</th>
                <th>Plataforma</th>
                <th>Tiempo</th>
                <th>Precio</th>
                <th>Enlace</th>
                <th>Eliminar</th>
            </tr>
        
        
            <tr>
                <td>${element.idPlataforma}</td>
                <td>${element.Plataforma}</td>
                <td>${element.Tiempo}</td>
                <td>${element.Precio}</td>
                <td>${element.Enlace}</td>
                <td><button onclick="eliminaSuscripcion(${element.idPlataforma})">Eliminar</button></td>
            </tr>
        
        </table> <hr>`
    });

    document.querySelector("#salida").innerHTML = salida
}

const eliminaSuscripcion = (idPlataforma) => {
    for (let i = 0; i < suscripciones.length; i++) {
        if (suscripciones[i].idPlataforma == idPlataforma) {
            suscripciones.splice(suscripciones.indexOf(suscripciones[i]),1) // Le paso la posicion, no el contenido en esa posicion.
        }
    }
    mostrarSuscripciones()
}