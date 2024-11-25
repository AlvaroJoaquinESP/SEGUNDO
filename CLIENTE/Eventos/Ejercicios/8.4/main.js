const billLine = [];
document.querySelector("#boton").addEventListener("click", () => {
  const bill = {
    product: document.querySelector("#product").value,
    cuantity: document.querySelector("#cuantity").value,
    pvp: document.querySelector("#pvp").value,
  };
  billLine.push(bill);
  console.log(billLine);
});

document.querySelector("#boton1").addEventListener("click", () => {
  let salida = ``;
  billLine.forEach((element) => {
    salida += `
    <table>
        <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
        </tr>
        <tr>
            <td>${element.product}</td>
            <td>${element.cuantity}</td>
            <td>${element.pvp}</td>
            <td>${element.pvp * element.cuantity}</td>
        </tr>
    </table>`;
  });

  document.querySelector("#detalleFactura").innerHTML = salida;
  let salida1 = ``
  let suma = 0
  for (const element of billLine) {
    suma += element.pvp * element.cuantity
    iva = suma * 0.21
    total = suma + iva
    salida1+= `
    <ul>
        <li>Base imponible: ${suma}</li>
        <li>IVA 21%: ${iva}</li>
        <li>Total factura: ${total}</li>
    </ul>`
  }
  document.querySelector("#pieFactura").innerHTML = salida1
});
