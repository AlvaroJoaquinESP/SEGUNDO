const campeonato = [];
document.querySelector("#boton").addEventListener("click", function () {
  const participante = {
    nombre : document.querySelector("#nombre").value,
    victorias : Number(document.querySelector("#victorias").value),
  };
  campeonato.push(participante);
  mostrar()
  
  document.querySelector("#nombre").value = ""
});

const mostrar = () => {
  let salida = `<table>
    <tr>
        <th>Nombre</th>
        <th>Victorias</th>
    </tr>
    `;

  campeonato.forEach((element) => {
    salida += `
    <tr>
        <td>${element.nombre}</td>
        <td>${element.victorias}</td>
        <td><button onclick="javascript:eliminarPorNombre('${element.nombre}')">Eliminar</button></td>
    </tr>
    `;
  });
  salida += `</table>`;
  document.querySelector("#salida").innerHTML = salida
};

const eliminarPorNombre = (nombre) => {
    for (let i = 0; i < campeonato.length; i++) {
        if (campeonato[i].nombre == nombre) {
            campeonato.splice(i,1)
        }
        
    }
    mostrar()
}