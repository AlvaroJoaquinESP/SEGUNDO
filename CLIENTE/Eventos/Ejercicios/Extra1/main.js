const libros = []
document.querySelector("#boton").addEventListener("click", () => {
  const libro = {
    idLibro: document.querySelector("#idLibro").value,
    titulo: document.querySelector("#titulo").value,
    autor: document.querySelector("#autor").value,
    genero: document.querySelector("#genero").value,
    enlace: document.querySelector("#enlace").value
  };
  
  libros.push(libro)

  mostrarLibros()

});

const mostrarLibros = () => {
    let salida = `<table>
            <tr>
                <th>id Libro</th>
                <th>titulo</th>
                <th>autor</th>
                <th>genero</th>
                <th>enlace</th>
            </tr>`

    libros.forEach(element => {
        salida+= `
        
            <tr>
                <td>${element.idLibro}</td>
                <td>${element.titulo}</td>
                <td>${element.autor}</td>
                <td>${element.genero}</td>
                <td>${element.enlace}</td>
                <td><button onclick="eliminarLibro(${element.idLibro})">Eliminar</button></td>
            </tr>`
       
    });
    salida+=`</table>`
    document.querySelector("#salida").innerHTML = salida
}

const eliminarLibro = (idLibro) => {
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].idLibro == idLibro) {
            libros.splice(i, 1)
            break // Termino el bucle cuando lo he eliminado
        }
        
    }
    mostrarLibros()
}
