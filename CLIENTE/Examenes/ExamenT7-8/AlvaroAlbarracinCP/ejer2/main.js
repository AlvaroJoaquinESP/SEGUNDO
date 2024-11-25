const inventario = [];
document.querySelector("#boton1").addEventListener("click", () => {
  anadirProducto();
});

document.querySelector("#boton2").addEventListener("click", () => {
  vaciarInventario();
});

const anadirProducto = () => {
  const producto = {
    idProducto: document.querySelector("#idProducto").value,
    nombre: document.querySelector("#nombre").value,
    cantidad: document.querySelector("#cantidad").value,
    pvp: document.querySelector("#pvp").value,
  };
  inventario.push(producto);
  mostrarInventario();
};

const mostrarInventario = () => {
  let salida = ``;

  inventario.forEach((element) => {
    salida += `
    <table>
    <tr>
        <th>idProducto</th>
        <th>nombre</th>
        <th>cantidad</th>
        <th>pvp</th>
        <th>Precio Total</th>
        <th>Acción</th>
    </tr>
        <tr>
            <td>${element.idProducto}</td>
            <td>${element.nombre}</td>
            <td>${element.cantidad}</td>
            <td>${element.pvp}</td>
            <td>${element.pvp * element.cantidad}</td>
            <td><button onclick="javascript:eliminaProducto()">Eliminar</button></td>
        </tr>
        </table>`;
  });
  document.querySelector("#salida").innerHTML = salida;
};

const vaciarInventario = () => {
  let salida2 = `
    <table>
    <tr>
        <th>idProducto</th>
        <th>nombre</th>
        <th>cantidad</th>
        <th>pvp</th>
        <th>Precio Total</th>
        <th>Acción</th>
    </tr>
        <tr>
            <td>No hay nada</td>
            <td>No hay nada</td>
            <td>No hay nada</td>
            <td>No hay nada</td>
            <td>No hay nada</td>
            <td><button onclick="javascript:eliminaProducto()">Eliminar</button></td>
        </tr>
        </table>`;
  document.querySelector("#salida").innerHTML = salida2;
};


const eliminaProducto = (idProducto) => {
//   for (let i = 0; i < inventario.length; i++) {
//     if (inventario[i].idProducto == idProducto) {
//       inventario.splice(inventario.indexOf(inventario[i]), 1);
//     }
// mostrarInventario()
//   }
for (const element of inventario) {
    // alert("aswdef") El boton va pero no elimina,l creo que el codigo es correcto, he probado con la manera de arriba y tampoco lo elimina.
    if (element.idProducto == idProducto) {
        inventario.splice(inventario.indexOf(element),1)
        break
    }
    
}

mostrarInventario()
};
