const actores = []
document.querySelector("#boton").addEventListener("click",function() {
    
        const actor = {
            nombre: document.querySelector("#nombre").value,
            apellidos: document.querySelector("#apellidos").value,
            genero: document.querySelector("input[name=genero]:checked").value,
            edad: document.querySelector("#edad").value,
            pelicula: document.querySelector("#pelicula").value
        }
        actores.push(actor)
        mostrar()
});

const mostrar = () => {
    let salida= `<table>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Género</th>
            <th>Edad</th>
            <th>Película</th>
        </tr> 
    </thead>`

    actores.forEach(element => {
        salida+=`
                <tr>
                    <td>${element.nombre}</td>
                    <td>${element.apellidos}</td>
                    <td>${element.genero}</td>
                    <td>${element.edad}</td>
                    <td>${element.pelicula}</td>
                </tr>
        </table>`
    });
    document.querySelector("#salida").innerHTML = salida
}
